import {FC, useEffect, useState} from 'react'

import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import {boolean} from "joi";


interface IProps {

}

const Cars: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [state,setState] = useState<boolean>(false);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [state])

    return (
        <div>
            <CarForm setCars={setCars}/>
            {cars.map(car => <Car key={car.id} car={car} setState={setState}/>)}
        </div>
    );
};
export default Cars