import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProjects } from '../../../features/dashboard/projects/projectSlice';
import './Projects.css';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

export default function Projects() {
    const disptach = useDispatch();
    const projects = useSelector((state) => state.projects.list);
    const status = useSelector((state) => state.projects.status);
    const error = useSelector((state) => state.projects.error);

    useEffect(() => {
        disptach(fetchProjects());
    }, [disptach]);

    if (status == 'loading') {
        return <div>Loading Projects...</div>
    }

    if (status == "failed") {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h4>Project Status</h4>
            <table id='projectsTable'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Due Date</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project,index) => {
                        const progressBarColor = colors[index % colors.length];
                        return (
                            <tr key={project.id}>
                                <td>{projects.indexOf(project) + 1}</td>
                                <td>{project.name}</td>
                                <td>{project.dueDate}</td>
                                <td><progress value={project.progress} max="100" ></progress></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}