import {FC} from 'react'

import './Todo.css'
import {ITodo} from "../../interfaces/todo.interface";

interface IProps{
todo: ITodo

}


const Todo: FC<IProps> = ({todo}) =>{
    const {id,title,completed}=todo
return(
       <div className={'todo'}>
           <li>{id}</li>
           <li>{title}</li>
           <li>{completed+''}</li>
       </div>
    );
};
export default Todo