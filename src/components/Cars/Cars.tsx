import {FC, useEffect} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {carActions} from "../../redux/slices/carSlice";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import Errors from "../Errors/Errors";
import User from "../User/User";
import avatar from  '../logo192.png'

const Cars: FC = () =>{
    const {cars,trigger,errors} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[ trigger,dispatch])

return(
       <div>
           <img src={avatar} alt="лого"/>
           <User/>
           <CarForm/>
           {errors && <Errors errors={errors}/>}
           {cars.map(car =><Car key={car.id} car={car}/>).reverse()}
       </div>
    );
};
export default Cars