import {FC} from 'react'

import {ICar} from "../../interfaces/car.interface";
import './Car.css'
import {carService} from "../../services/car.service";
import {IUseState} from "../../types/useStateType";

interface IProps {
    car: ICar
    setState: IUseState<boolean>
    setCarForUpdate: IUseState<ICar | null>

}

const Car: FC<IProps> = ({car, setState, setCarForUpdate}) => {
    const {id, year, price, brand} = car;
    const deleteCar = async (id: number) => {
        await carService.delete(id)
        setState(prev => !prev)
    }


    return (
        <div className={'car'}>
            <li>{id}</li>
            <li>{brand}</li>
            <li>{price}</li>
            <li>{year}</li>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
        </div>
    );
};
export default Car