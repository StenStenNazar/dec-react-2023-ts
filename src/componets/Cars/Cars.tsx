import {FC, useEffect, useState} from 'react'

import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import './Cars.css'

interface IProps {

}

const Cars: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [state, setState] = useState<boolean>(false);
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [state])

    return (
        <div className={'container'}>
            <div>
                <CarForm setCars={setCars} carForUpdate={carForUpdate} setState={setState}
                         setCarForUpdate={setCarForUpdate}/>
            </div>
            <div className={'cars'}>
                {cars.map(car => <Car key={car.id} car={car} setState={setState} setCarForUpdate={setCarForUpdate}/>)}
            </div>
        </div>
    );
};
export default Cars