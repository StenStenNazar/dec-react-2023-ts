import {FC, useEffect, useState} from 'react'
import {Outlet} from "react-router-dom";

import {IComments} from "../../interfaces/comments.interface";
import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";
import './Comments.css'


const Comments: FC = () => {
    const [comments, setComments] = useState<IComments[]>([]);
    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => setComments(value))
    }, [])

    return (
        <div className={'wrapper'}>
            <div className={'comments_container'}>
                <div className={'comments'}>{comments && comments.map(comment => <Comment key={comment.id}
                                                                                          comment={comment}/>)}</div>
            </div>
            <Outlet/>
        </div>
    );
};
export default Comments