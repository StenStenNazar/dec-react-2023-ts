import {FC, useEffect} from 'react'
import {authActions} from "../../redux/slices/authSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {IUser} from "../../interfaces/user.interface";



const User: FC= () =>{
    const dispatch = useAppDispatch();
    const {me} = useAppSelector(state => state.authReducer);
    useEffect(()=>{
        dispatch(authActions.me())
    },[dispatch])

return(
       <div>
           {me &&
               <div>username:{me.username}</div>
           }
       </div>
    );
};
export default User