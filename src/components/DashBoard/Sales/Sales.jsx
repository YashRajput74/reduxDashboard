import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { fetchSales } from '../../../features/dashboard/sales/salesSlice';
import { useEffect } from 'react';
import './Sales.css';

export default function Sales() {
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);

    useEffect(() => {
        dispatch(fetchSales());
    }, [dispatch])

    return (
        <div>
            <h3 className="chart-title">Visit and Sales Statistics</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={salesData}
                    margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
                    barCategoryGap="30%"
                    barGap={4}
                >
                    <XAxis dataKey="month" />
                    <Tooltip />
                    <Legend  iconType="circle"/>
                    <Bar dataKey="China" fill="#DA8CFF" />
                    <Bar dataKey="USA" fill="#FFBF96" />
                    <Bar dataKey="UK" fill="#36D7E8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}