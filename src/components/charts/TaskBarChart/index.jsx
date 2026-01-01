import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import './style.scss';

export default function EmployeeTaskChart() {
  const data = [
    { name: 'Junaid Ashraf', assigned: 16, inprogress: 14, completed: 15 },
    { name: 'Samiran Shil', assigned: 1, inprogress: 1, completed: 1 },
    { name: 'Juli Biswas', assigned: 40, inprogress: 32, completed: 6 },
    { name: 'Sayan Maiti', assigned: 5, inprogress: 2, completed: 3 },
    { name: 'Soham Dutta', assigned: 1, inprogress: 1, completed: 1 }
  ];

  const assignedColor = '#8E8FFA';
  const progressColor = '#FFB200';
  const completedColor = '#4CAF50';

  return (
    <div className="employee-task-chart">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={8}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="assigned">
            {data.map((_, i) => <Cell key={i} fill={assignedColor} />)}
          </Bar>
          <Bar dataKey="inprogress">
            {data.map((_, i) => <Cell key={i} fill={progressColor} />)}
          </Bar>
          <Bar dataKey="completed">
            {data.map((_, i) => <Cell key={i} fill={completedColor} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
