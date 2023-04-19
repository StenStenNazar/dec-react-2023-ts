import {FC} from 'react'
import {useState, useEffect} from "react";

import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

interface IProps {

};

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [])
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};
export default Users