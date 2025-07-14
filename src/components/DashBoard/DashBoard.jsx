import Projects from "./Projects/Projects";
import Sales from "./Sales/Sales";
import Tickets from "./Tickets/Tickets";
import ToDoList from "./ToDo/ToDoList";
import TrafficSources from "./TrafficSources/TrafficSources";
import Updates from "./Updates/Updates";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function DashBoard() {
    return (
        <div id="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <div>
                        <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <p>DashBoard</p>
                </div>
                <p>Overview
                    <FontAwesomeIcon icon={faCircleExclamation} className="circleInfo"/>
                </p>
            </div>
            <Updates />
            <div className="dashboard-charts">
                <Sales />
                <TrafficSources />
            </div>
            <Tickets />
            <div className="dashboard-lower-section">
                <Projects />
                <ToDoList />
            </div>
        </div>
    )
}