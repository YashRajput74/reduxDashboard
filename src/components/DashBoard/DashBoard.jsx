import Projects from "./Projects/Projects";
import Sales from "./Sales/Sales";
import Tickets from "./Tickets/Tickets";
import ToDoList from "./ToDo/ToDoList";
import TrafficSources from "./TrafficSources/TrafficSources";
import Updates from "./Updates/Updates";

export default function DashBoard() {
    return (
        <div id="dashboard-container">
            <Updates />
            <div>
                <Sales />
                <TrafficSources />
                <Tickets />
                <Projects />
                <ToDoList />
            </div>
        </div>
    )
}