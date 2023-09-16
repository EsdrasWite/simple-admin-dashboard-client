import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = ({dataTable})=> {
  const data = [
    {
      name: '',
      Taux_Poussière: !!(dataTable[0].poussiere) ? (dataTable[0].poussiere): 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '1',
      Taux_Poussière: !!(dataTable[1].poussiere) ? (dataTable[1].poussiere): 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '2',
      Taux_Poussière: !!(dataTable[2].poussiere) ? (dataTable[2].poussiere): 0,
      // pv: 98,
      // amt: 22,
    },
    {
      name: '3',
      Taux_Poussière: !!(dataTable[3].poussiere) ? (dataTable[3].poussiere): 0,
      // pv: 39,
      // amt: 20,
    },
    {
      name: '4',
      Taux_Poussière: !!(dataTable[4].poussiere) ? (dataTable[4].poussiere): 0,
      // pv: 48,
      // amt: 21,
    },
    {
      name: '5',
      Taux_Poussière: !!(dataTable[5].poussiere) ? (dataTable[5].poussiere): 0,
      // pv: 38,
      // amt: 25,
    },
    {
      name: '6',
      Taux_Poussière: !!(dataTable[6].poussiere) ? (dataTable[6].poussiere): 0,
      // pv: 43,
      // amt: 21,
    },
    {
      name: '7',
      Taux_Poussière: !!(dataTable[7].poussiere) ?  (dataTable[7].poussiere): 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '8',
      Taux_Poussière: !!(dataTable[8].poussiere) ? (dataTable[8].poussiere): 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '9',
      Taux_Poussière: !!(dataTable[9].poussiere) ? (dataTable[9].poussiere): 0,
      // pv: 98,
      // amt: 22,
    },
  
  ];
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
          <Area type="monotone" dataKey="Taux_Poussière" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  
}

export default Chart;

