import {FC, useEffect, useState} from 'react'

import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

interface IProps {

}

const Comments: FC<IProps> = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
export default Comments