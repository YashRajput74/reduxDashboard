import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { fetchSales } from '../../../features/dashboard/sales/salesSlice';
import { useEffect } from 'react';
import './Sales.css';

export default function Sales() {
    const dispatch = useDispatch();
    const salesData = useSelector((state) => state.sales.salesData);

    useEffect(()=>{
        dispatch(fetchSales());
    },[dispatch])

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
                    <Bar dataKey="USA" fill="#8884d8" />
                    <Bar dataKey="UK" fill="#82ca9d" />
                    <Bar dataKey="China" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}