import {FC} from 'react'

import './Comment.css'
import {IComment} from "../../interfaces/comment.interface";

interface IProps{
comment:IComment
}

const Comment: FC<IProps> = ({comment}) =>{
    const {id,name,body} = comment;
return(
       <div className={'comment'}>
            <li>{id}</li>
           <li>{name}</li>
           <li>{body}</li>
       </div>
    );
};
export default Comment