import {FC} from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {ILogReg} from "../../interfaces/logReg.interface";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {authActions} from "../../redux/slices/authSlice";


const UserRegister: FC = () => {
    const {handleSubmit, register} = useForm<ILogReg>();
    const {error} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();

    const create: SubmitHandler<ILogReg> = async (user) => {
        await dispatch(authActions.register(user))
    }
    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'username'} {...register('username', {required: true})}/>
            <input type="text" placeholder={'password'}{...register('password', {required: true})}/>
            <button>зареєструвати юзера</button>
            <Link to={'/login'}>
                <button>увійти</button>
            </Link>
            {error && <div>Юзер з такими даними вже зареєстрований</div>}
        </form>
    );
};
export default UserRegister