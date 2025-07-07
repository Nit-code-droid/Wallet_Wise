import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyComparisonChart = ({ data }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-green-200/50">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Monthly Comparison</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="previous" fill="#C4B5FD" name="Last Year" />
          <Bar dataKey="current" fill="#86EFAC" name="This Year" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyComparisonChart;
