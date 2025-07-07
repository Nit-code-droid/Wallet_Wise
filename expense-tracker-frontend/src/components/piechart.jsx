// components/CategoryPieChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#F9A8D4', '#FDE68A', '#C4B5FD', '#86EFAC']; // Pink, Yellow, Purple, Green

const CategoryPieChart = ({ data }) => {
  const chartData = Object.entries(data).map(([category, amount]) => ({
    name: category,
    value: amount,
  }));

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg border border-green-200/50">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Spending by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;
