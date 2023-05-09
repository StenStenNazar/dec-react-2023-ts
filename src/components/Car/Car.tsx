import {FC} from 'react'

import './Car.css'
import {CarInterface} from "../../interfaces/car.interface";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {carActions} from "../../redux/slices/carSlice";

interface IProps {
    car: CarInterface
}

const Car: FC<IProps> = ({car}) => {
    const {brand, price, year, id} = car
    const dispatch = useAppDispatch();

    const remowe = (id: number) => {
        dispatch(carActions.deleteCar({id}))
    }

    return (
        <div className={'car'}>
            <div><b>id</b>:{id}</div>
            <div><b>brand</b>:{brand}</div>
            <div><b>price</b>:{price}</div>
            <div><b>year</b>:{year}</div>
            <button onClick={() => remowe(id)}>delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
        </div>
    );
};
export default Car