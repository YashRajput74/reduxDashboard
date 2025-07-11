import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import fetchUpdates from "../../features/dashboard/updates/updatesSlice";

export default function Updates() {
    const dispatch = useDispatch();
    const { weeklySales, weeklyOrders, visitorsOnline, status, error } = useSelector((state) => state.updates);

    useEffect(()=>{
        dispatch(fetchUpdates());
    },[dispatch])

    if (status === 'loading') {
        return <div>Loading Updates...</div>
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <div id="updates">
            <div>
                <h3>Weekly Sales</h3>
                <p>{weeklySales?.value || 'N/A'}</p>
                <p>
                    {weeklySales?.change > 0 ? `Increased by ${weeklySales.change}%` : `Decreased by ${weeklySales.change}%`}
                </p>
            </div>
            <div>
                <h3>Weekly Orders</h3>
                <p>{weeklyOrders?.value || 'N/A'}</p>
                <p>
                    {weeklyOrders?.change > 0 ? `Increased by ${weeklyOrders.change}%` : `Decreased by ${weeklyOrders.change}%`}
                </p>
            </div>
            <div>
                <h3>Visitors Online</h3>
                <p>{visitorsOnline?.value || 'N/A'}</p>
                <p>
                    {visitorsOnline?.change > 0 ? `Increased by ${visitorsOnline.change}%` : `Decreased by ${visitorsOnline.change}%`}
                </p>
            </div>
        </div>
    )
}