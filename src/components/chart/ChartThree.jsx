import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({dataTable})=> {
  const data = [
    {
      name: '',
      Température_ambiante: !!(dataTable[0].temperatureamb) ? (dataTable[0].temperatureamb) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '1',
      Température_ambiante: !!(dataTable[1].temperatureamb) ? (dataTable[1].temperatureamb) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '2',
      Température_ambiante: !!(dataTable[2].temperatureamb) ? (dataTable[2].temperatureamb) : 0,
      // pv: 98,
      // amt: 22,
    },
    {
      name: '3',
      Température_ambiante: !!(dataTable[3].temperatureamb) ? (dataTable[3].temperatureamb) : 0,
      // pv: 39,
      // amt: 20,
    },
    {
      name: '4',
      Température_ambiante: !!(dataTable[4].temperatureamb) ? (dataTable[4].temperatureamb) : 0,
      // pv: 48,
      // amt: 21,
    },
    {
      name: '5',
      Température_ambiante: !!(dataTable[5].temperatureamb) ? (dataTable[5].temperatureamb) : 0,
      // pv: 38,
      // amt: 25,
    },
    {
      name: '6',
      Température_ambiante: !!(dataTable[6].temperatureamb) ? (dataTable[6].temperatureamb) : 0,
      // pv: 43,
      // amt: 21,
    },
    {
      name: '7',
      Température_ambiante: !!(dataTable[7].temperatureamb) ?  (dataTable[7].temperatureamb) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '8',
      Température_ambiante: !!(dataTable[8].temperatureamb) ? (dataTable[8].temperatureamb) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '9',
      Température_ambiante: !!(dataTable[9].temperatureamb) ? (dataTable[9].temperatureamb) : 0,
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
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Température_ambiante" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  
}

export default Chart;

