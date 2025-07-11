import Projects from "./Projects";
import Sales from "./sales";
import Tickets from "./Tickets";
import ToDoList from "./ToDoList";
import TrafficSources from "./trafficSources";
import Updates from "./updates";

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