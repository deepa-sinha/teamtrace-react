import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './style.scss';

export default function TaskPieChart() {
  const data = [
    { name: 'In Progress', value: 58, color: '#3B82F6' },
    { name: 'Updated in Dev', value: 21, color: '#EC4899' },
    { name: 'Updated in Prod', value: 7, color: '#22C55E' },
    { name: 'Completed', value: 6, color: '#60A5FA' },
    { name: 'To Do', value: 3, color: '#FACC15' },
    { name: 'Approved', value: 5, color: '#34D399' },
    { name: 'Hold by Amitabh Sir', value: 7, color: '#16A34A' }
  ];

  return (
    <div className="task-chart-container">
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={90}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="legend-wrapper">
        <ul className="legend-list">
          {data.map((entry) => (
            <li key={entry.name}>
              <span className="dot" style={{ backgroundColor: entry.color }}></span>
              {entry.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
