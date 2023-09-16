import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({dataTable})=> {
  const data = [
    {
      name: '',
      Niveau_Fumée: !!(dataTable[0].niveaufumee) ? (dataTable[0].niveaufumee) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '1',
      Niveau_Fumée: !!(dataTable[1].niveaufumee) ? (dataTable[1].niveaufumee) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '2',
      Niveau_Fumée: !!(dataTable[2].niveaufumee) ? (dataTable[2].niveaufumee) : 0,
      // pv: 98,
      // amt: 22,
    },
    {
      name: '3',
      Niveau_Fumée: !!(dataTable[3].niveaufumee) ? (dataTable[3].niveaufumee) : 0,
      // pv: 39,
      // amt: 20,
    },
    {
      name: '4',
      Niveau_Fumée: !!(dataTable[4].niveaufumee) ? (dataTable[4].niveaufumee) : 0,
      // pv: 48,
      // amt: 21,
    },
    {
      name: '5',
      Niveau_Fumée: !!(dataTable[5].niveaufumee) ? (dataTable[5].niveaufumee) : 0,
      // pv: 38,
      // amt: 25,
    },
    {
      name: '6',
      Niveau_Fumée: !!(dataTable[6].niveaufumee) ? (dataTable[6].niveaufumee) : 0,
      // pv: 43,
      // amt: 21,
    },
    {
      name: '7',
      Niveau_Fumée: !!(dataTable[7].niveaufumee) ?  (dataTable[7].niveaufumee) : 0,
      // pv: 24,
      // amt: 24,
    },
    {
      name: '8',
      Niveau_Fumée: !!(dataTable[8].niveaufumee) ? (dataTable[8].niveaufumee) : 0,
      // pv: 13,
      // amt: 22,
    },
    {
      name: '9',
      Niveau_Fumée: !!(dataTable[9].niveaufumee) ? (dataTable[9].niveaufumee) : 0,
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
          <Area type="monotone" dataKey="uu" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Niveau_Fumée" stackId="1" stroke="#618989" fill="#547fbac5" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  
}

export default Chart;
