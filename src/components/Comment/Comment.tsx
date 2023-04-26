import {FC} from 'react'
import { Link } from 'react-router-dom';

import {IComments} from "../../interfaces/comments.interface";
import './Comment.css'

interface IProps {
    comment: IComments
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, name, body, email, postId} = comment;
    return (
        <div className={'comment'}>
            <li>{postId}</li>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
            <li>{body}</li>
            <Link to={`${postId}`} state={comment}><button>Cur Post</button></Link>
        </div>
    );
}
export default Comment