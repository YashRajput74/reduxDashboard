import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { fetchToDos, addToDo, toggleToDoStatus, deleteToDo } from '../../../features/toDo/toDoSlice';
import './ToDoList.css';

export default function ToDoList() {
    const dispatch = useDispatch();
    const { data: ToDoList, status, error } = useSelector((state) => state.toDos);
    const [toDo, setToDo] = useState('');

    function textFunction(e) {
        setToDo(e.target.value);
    }

    function handleAdd() {
        if (toDo.trim() === '') return;
        const newToDo = {
            title: toDo,
            completed: false,
        }
        dispatch(addToDo(newToDo));
        setToDo('');
    }

    function handleToggle(todoId) {
        dispatch(toggleToDoStatus(todoId));
    }

    function handleDelete(todoId) {
        dispatch(deleteToDo(todoId))
    }

    useEffect(() => {
        dispatch(fetchToDos());
    }, [dispatch])

    if (status == "loading") {
        return <div>Loading ToDos...</div>
    }

    if (status == "failed") {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h4>Todo List</h4>
            <div className="ToDoInputWrapper">
                <input type="text" placeholder="What do you need to do today?" value={toDo} onChange={textFunction} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                {ToDoList.map((listItem) => {
                    return (
                        <div className="todo-item" key={listItem.id}>
                            <input type="checkbox" checked={listItem.completed} onChange={() => handleToggle(listItem.id)} />
                            <p style={{ textDecoration: listItem.completed ? 'line-through' : 'none' }}>{listItem.title}</p>
                            <button onClick={() => handleDelete(listItem.id)}>x</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}