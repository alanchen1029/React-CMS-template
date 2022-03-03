import * as React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { data3 } from '.';

export const PieChartComponent = (): JSX.Element =>
{
  return (
    <div className="chart-wrapper">
      <div className="chart-title">Pie Chart</div>
      <div className="chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart >
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data3}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            {/* <Pie dataKey="value" data={data3} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}