import '../node_modules/react-vis/dist/style.css';
import Layout from '@components/Layout';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from 'react-vis';
import fire from '../config/fire-config';
import { useEffect, useState } from 'react';

function Work() {
  const [normal, setNormal] = useState([]);
  const [overtime, setOvertime] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let n = [],
      o = [];

    fire
      .firestore()
      .collection('work-hours')
      .limit(50)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const d = doc.data();
          const day = d.day.toDate().toLocaleDateString('en-US')
          n.push({
            x: day,
            y: d.hours >= 8 ? 8 : d.hours,
          });
          o.push({
            x: day,
            y: d.hours > 8 ? d.hours - 8 : 0,
          });
        });

        setNormal(n);
        setOvertime(o);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <XYPlot margin={{bottom: 70}} width={300} height={300} stackBy="y" xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries data={normal} />
        <VerticalBarSeries data={overtime} />
      </XYPlot>
    </Layout>
  );
}

export default Work;
