import {FC} from 'react'
import {useState, useEffect} from "react";

import {todoService} from "../../services/todo.service";
import {ITodo} from "../../interfaces/todo.interface";
import Todo from "../Todo/Todo";
import './Todos.css'


interface IProps {

}

const Todos: FC<IProps> = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        todoService.getAll().then(value => value.data).then(value => setTodos([...value]))
    }, [])

    return (
        <div className={'todos'}>
            { todos && todos.map(todo =><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};
export default Todos