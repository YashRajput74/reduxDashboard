import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(){
    return (
        <section id="sidebar">
            <p>
                DashBoard
                <FontAwesomeIcon icon={faHouse} />
            </p>
            <p>Page Layouts</p>
            <p>Apps</p>
            <p>Widgets</p>
            <p>Sidebar Layouts</p>
            <p>Basic UI Elements</p>
            <p>Advannced UI</p>
            <p>Popups</p>
            <p>Notifications</p>
            <p>Icons</p>
            <p>Forms</p>
        </section>
    )
}