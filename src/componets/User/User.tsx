import {FC} from 'react'

import {IUser} from "../../interfaces/user.interface";
import './User.css'

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name, email} = user
    return (
        <div className={'user'}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
        </div>
    );
};
export default User