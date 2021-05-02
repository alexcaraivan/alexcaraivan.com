import '../node_modules/react-vis/dist/style.css';
import Layout from '@components/Layout';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from 'react-vis';
import fire from '../config/fire-config';
import { useEffect, useState } from 'react';

function Work() {
  const [normal, setNormal] = useState([]);
  const [overtime, setOvertime] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let normal = [],
      overtime = [];

    fire
      .firestore()
      .collection('work-hours')
      .limit(50)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const d = doc.data();
          console.log(d);
          normal.push({
            x: 'A',
            y: d.hours >= 8 ? 8 : d.hours,
          });
          overtime.push({
            x: 'A',
            y: d.hours > 8 ? d.hours - 8 : 0,
          });
        });

        console.log(normal);
        console.log(overtime);

        setNormal(normal);
        setOvertime(overtime);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {!loading && (
        <XYPlot width={300} height={300} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={normal} />
          <VerticalBarSeries data={overtime} />
        </XYPlot>
      )}
    </Layout>
  );
}

export default Work;
