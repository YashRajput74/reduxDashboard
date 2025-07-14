import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTickets } from '../../../features/dashboard/tickets/ticketSlice';
import './Tickets.css';

export default function Tickets() {
    const disptach = useDispatch();
    const tickets = useSelector((state) => state.tickets.list);
    const status = useSelector((state) => state.tickets.status);
    const error = useSelector((state) => state.tickets.error);

    useEffect(() => {
        disptach(fetchTickets());
    }, [disptach]);

    if (status == 'loading') {
        return <div>Loading Tickets...</div>
    }

    if (status == 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h4>Recent Tickets</h4>
            <table id="ticketTable">
                <thead>
                    <tr>
                        <th>Assignee</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Last Update</th>
                        <th>Tracking Id</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((entry) => {
                        return (
                            <tr key={entry.id}>
                                <td>{entry.assignee}</td>
                                <td>{entry.subject}</td>
                                <td><p style={{
                                    backgroundColor:
                                        entry.status === 'Done' ? 'green' :
                                            entry.status === 'Progress' ? 'yellow' :
                                                entry.status === 'on hold' ? 'blue' :
                                                    entry.status === 'rejected' ? 'red' :
                                                        'transparent',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    display: 'inline-block',
                                    textTransform: 'capitalize'
                                }}>{entry.status}</p></td>
                                <td>{entry.lastUpdated}</td>
                                <td>{entry.id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}