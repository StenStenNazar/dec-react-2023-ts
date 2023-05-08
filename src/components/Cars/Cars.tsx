import {FC, useEffect} from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {carActions} from "../../redux/slices/carSlice";
import Car from "../Car/Car";

const Cars: FC = () =>{
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch])
return(
       <div>
           {cars.map(car =><Car key={car.id} car={car}/>)}
       </div>
    );
};
export default Cars