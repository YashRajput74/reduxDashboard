import Projects from "./Projects";
import Sales from "./Sales/Sales";
import Tickets from "./Tickets";
import ToDoList from "./ToDoList";
import TrafficSources from "./trafficSources";
import Updates from "./Updates/Updates";

export default function DashBoard() {
    return (
        <div id="dashboard-container">
            <Updates />
            <div>
                {/* <Sales />
                <TrafficSources />
                <Tickets />
                <Projects />
                <ToDoList /> */}
            </div>
        </div>
    )
}