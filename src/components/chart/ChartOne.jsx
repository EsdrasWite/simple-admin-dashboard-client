import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Axios from '../../services/caller.service';

const Chart = ({dataTable}) => {


  const data = [
    {
      name: '',
      Humidite_ambiante: !!(dataTable[0].humiditeeamb) ? (dataTable[0].humiditeeamb) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '1',
      Humidite_ambiante: !!(dataTable[1].humiditeeamb) ? (dataTable[1].humiditeeamb) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '2',
      Humidite_ambiante: !!(dataTable[2].humiditeeamb) ? (dataTable[2].humiditeeamb) : 0,
      // pv: 98,
      // amt: 22,
    },
    {
      name: '3',
      Humidite_ambiante: !!(dataTable[3].humiditeeamb) ? (dataTable[3].humiditeeamb) : 0,
      // pv: 39,
      // amt: 20,
    },
    {
      name: '4',
      Humidite_ambiante: !!(dataTable[4].humiditeeamb) ? (dataTable[4].humiditeeamb) : 0,
      // pv: 48,
      // amt: 21,
    },
    {
      name: '5',
      Humidite_ambiante: !!(dataTable[5].humiditeeamb) ? (dataTable[5].humiditeeamb) : 0,
      // pv: 38,
      // amt: 25,
    },
    {
      name: '6',
      Humidite_ambiante: !!(dataTable[6].humiditeeamb) ? (dataTable[6].humiditeeamb) : 0,
      // pv: 43,
      // amt: 21,
    },
    {
      name: '7',
      Humidite_ambiante: !!(dataTable[7].humiditeeamb) ?  (dataTable[7].humiditeeamb) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '8',
      Humidite_ambiante: !!(dataTable[8].humiditeeamb) ? (dataTable[8].humiditeeamb) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '9',
      Humidite_ambiante: !!(dataTable[9].humiditeeamb) ? (dataTable[9].humiditeeamb): 0,
      // pv: 98,
      // amt: 22,
    },

  ];

  // React.useEffect(() => {

  //   setInterval(() => {
  //     Axios.get(`/infopotfleur`)
  //       .then(response => {
  //         setDataTable(response.data.data.slice(-10))
  //       })
  //       .catch(error => console.log(error))

  //   }, 1000);

  // }, [])

  return (
    <ResponsiveContainer width="99%" height={300}>
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Humidite_ambiante" stackId="1" stroke="#CE1D1D" fill="#F5D2D2" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>
  );

}

export default Chart;
