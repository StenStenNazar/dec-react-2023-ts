import {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';

import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import {IUseState} from "../../types/useStateType";

interface IProps {
    setUsers: IUseState<IUser[]>
};

const UserForm: FC<IProps> = ({setUsers}) => {
    const {register, handleSubmit, reset} = useForm<IUser>();
    const save: SubmitHandler<IUser> = async (user) => {
        const {data} = await userService.create(user)
        setUsers(prev => [...prev, data])
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>Save</button>
            </form>
        </div>
    );
};
export default UserForm