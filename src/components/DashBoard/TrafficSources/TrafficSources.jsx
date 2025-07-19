import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTrafficSlice } from '../../../features/dashboard/traffic/trafficSlice';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

export default function TrafficSources() {
    const dispatch = useDispatch();
    const trafficData = useSelector((state) => state.traffic.data);
    const status = useSelector((state) => state.traffic.status);
    const error = useSelector((state) => state.traffic.error);

    useEffect(() => {
        if (status == 'idle') {
            dispatch(fetchTrafficSlice());
        }
    }, [status, dispatch])

    if (status == 'loading') {
        return <div>Loading Traffic Data...</div>
    }

    if (error == 'error') {
        return <div>Error: {error}</div>
    }

    const COLORS = ['#36D7E8', '#06B99D', '#FE7096'];

    return (
        <div>
            <h3>Traffic Sources</h3>
            <PieChart width={400} height={400}>
                <Pie
                    data={trafficData}
                    cx="20%"
                    cy="40%"
                    innerRadius={70}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="source"
                    label
                >
                    {trafficData && trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical"
                    align="left"
                    iconType="circle" />
            </PieChart>
        </div>
    )
}