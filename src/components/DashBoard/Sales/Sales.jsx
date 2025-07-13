
import { useSelector } from 'react-redux';
import './Sales.css';

export default function Sales() {
    const salesData = useSelector((state) => state.sales.data);
    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={salesData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="US" fill="#8884d8" />
                    <Bar dataKey="UK" fill="#82ca9d" />
                    <Bar dataKey="China" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}