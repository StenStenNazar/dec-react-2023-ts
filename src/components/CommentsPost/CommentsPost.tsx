import {FC, useEffect, useState} from 'react'

import {IComments} from "../../interfaces/comments.interface";
import {useAppLocation} from "../../hooks/route.hoks";
import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";
import './СommentsPost.css'
import {Link} from "react-router-dom";

interface IProps {

}

const CommentsPost: FC<IProps> = () => {
    const {state} = useAppLocation<IComments>();

    const [post, setPost] = useState<IPost | null>(null);

    useEffect(() => {
        postService.getById(state.postId.toString()).then(value => value.data).then(value => setPost(value))
    }, [state.id])



    console.log(state.postId)
    return (
        <div>
            {post && <div className={'comments_post'}>
                <div><b>PostId:</b>{post.id}</div>
                <div>{post.body}</div>
                <div>{post.title}</div>
                <Link to={'/comments'}><button>hide</button></Link>
            </div>}
        </div>
    );
};
export default CommentsPost