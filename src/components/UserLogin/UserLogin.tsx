import {FC} from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {ILogReg} from "../../interfaces/logReg.interface";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {authActions} from "../../redux/slices/authSlice";

interface IProps{

}

const UserLogin: FC<IProps> = () =>{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {handleSubmit,register} = useForm<ILogReg>();

    const login:SubmitHandler<ILogReg> = async (user)=>{
         await dispatch(authActions.logIn(user))
        navigate('/cars')
    }

return(
       <form onSubmit={handleSubmit(login)}>
           <input type="text" placeholder={'username'}{...register('username',{required:true})}/>
           <input type="text" placeholder={'password'}{...register('password',{required:true})}/>
           <button>увійти</button>
           <Link to={'/register'}><button>зареєструватися</button></Link>
       </form>
    );
};
export default UserLogin