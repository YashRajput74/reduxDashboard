import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUpdates } from "../../../features/dashboard/updates/updatesSlice";

export default function Updates() {
    const dispatch = useDispatch();
    const { updates, status, error } = useSelector((state) => state.updates);
    const { weeklySales, weeklyOrders, visitorsOnline } = updates;


    useEffect(() => {
        dispatch(fetchUpdates());
    }, [dispatch])

    if (status === 'loading' || !weeklySales || !weeklyOrders || !visitorsOnline) {
        return <div>Loading Updates...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <div id="updates">
            <div className="weekly-sales">
                <h3>Weekly Sales</h3>
                <p>${weeklySales?.value || 'N/A'}</p>
                <p>
                    {weeklySales?.change > 0 ? `Increased by ${weeklySales.change}%` : `Decreased by ${weeklySales.change}%`}
                </p>
            </div>
            <div className="weekly-orders">
                <h3>Weekly Orders</h3>
                <p>{weeklyOrders?.value || 'N/A'}</p>
                <p>
                    {weeklyOrders?.change > 0 ? `Increased by ${weeklyOrders.change}%` : `Decreased by ${weeklyOrders.change}%`}
                </p>
            </div>
            <div className="visitors-online">
                <h3>Visitors Online</h3>
                <p>{visitorsOnline?.value || 'N/A'}</p>
                <p>
                    {visitorsOnline?.change > 0 ? `Increased by ${visitorsOnline.change}%` : `Decreased by ${visitorsOnline.change}%`}
                </p>
            </div>
        </div>
    )
}