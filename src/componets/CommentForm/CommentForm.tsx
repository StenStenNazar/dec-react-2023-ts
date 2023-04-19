import {FC} from 'react'

import {SubmitHandler, useForm} from "react-hook-form";
import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";
import {IUseState} from "../../types/useStateType";

interface IProps{
    setComments:IUseState<IComment[]>
}

const CommentForm: FC<IProps> = ({setComments}) =>{
    const {register,handleSubmit,reset} = useForm<IComment>();
    const save:SubmitHandler<IComment> = async (comment)=>{
        const {data} = await commentService.create(comment)
        setComments(prev=>[...prev,data])
        reset()
    }

return(
       <div>
           <form onSubmit={handleSubmit(save)}>
               <input type="text" placeholder={'name'} {...register('name')}/>
               <input type="text" placeholder={'body'} {...register('body')}/>
               <button>Save</button>
           </form>
       </div>
    );
};
export default CommentForm