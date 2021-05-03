import '../node_modules/react-vis/dist/style.css';
import Layout from '@components/Layout';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
} from 'react-vis';
import fire from '../config/fire-config';
import { useEffect, useState } from 'react';

const options = { year: 'numeric', month: 'short', day: 'numeric' };

const formatDate = (d) => d.toLocaleDateString('en-US', options);

function Work() {
  const [normal, setNormal] = useState([]);
  const [overtime, setOvertime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hours, setHours] = useState('');
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    let n = [],
      o = [];

    fire
      .firestore()
      .collection('work-hours')
      .orderBy('day', 'asc')
      .limit(14)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const d = doc.data();
          const day = formatDate(d.day.toDate());
          n.push({
            id: doc.id,
            x: day,
            y: d.hours > 8 ? 8 : d.hours,
          });
          o.push({
            id: doc.id,
            x: day,
            y: d.hours > 8 ? d.hours - 8 : 0,
          });
        });

        setNormal(n);
        setOvertime(o);
        setLoading(false);
      });
  }, []);

  const handleChange = (evt) => setHours(parseInt(evt.target.value));

  const addHours = () => {
    console.log(update);
    console.log(hours);
    const c = fire.firestore().collection('work-hours');

    const promise = update
      ? c.doc(update.id).update({ hours })
      : c.add({
          hours,
          day: new Date(),
        });

    promise
      .then(() => {
        const ot = overtime.map((o) => {
          if (o.id === update.id) {
            o.y = hours > 8 ? hours - 8 : 0;
          }

          return o;
        });
        const nt = normal.map((o) => {
          if (o.id === update.id) {
            o.y = hours > 8 ? 8 : hours;
          }
          return o;
        });
        setOvertime(ot);
        setNormal(nt);
        setHours('');
        setUpdate(null);
        console.log(`Document ${update ? 'updated' : 'added'}`);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const edit = (datapoint, event) => {
    if (update && datapoint.id === update.id) {
      setUpdate(null);
      setHours('');
      return;
    }
    const ot = overtime.find((o) => datapoint.id === o.id);
    const nt = normal.find((o) => datapoint.id === o.id);
    setHours(ot.y + nt.y);
    setUpdate(datapoint);
  };

  return (
    <Layout>
      <h1 className="text-center text-4xl pt-6 pb-8">Caza's OT days</h1>
      <div className="flex items-center justify-center">
        <XYPlot margin={{ bottom: 70 }} width={600} height={300} stackBy="y" xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-45} />
          <YAxis />
          <VerticalBarSeries data={normal} color="#2E5090" onValueClick={edit} />
          <VerticalBarSeries data={overtime} color="#CD5700" onValueClick={edit} />
        </XYPlot>
      </div>
      <p className="text-center pb-6">You like to work more on: Tuesdays</p>
      <div className="flex items-center justify-center">
        <input
          name="hours"
          type="number"
          min="1"
          max="24"
          placeholder="work hours"
          className="px-4 py-2 border text-black w-32"
          value={hours}
          onChange={handleChange}
        />
        <button className="px-4 py-2 bg-white text-black border" onClick={addHours}>
          {update ? `Update (${update.x})` : `Add (${formatDate(new Date())})`}
        </button>
      </div>
    </Layout>
  );
}

export default Work;
