import {FC} from 'react'
import {ICar} from "../../interfaces/car.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {IUseState} from "../../types/useStateType";

interface IProps {
    setCars:IUseState<ICar[]>
}

const CarForm: FC<IProps> = ({setCars}) => {
    const {register,reset,handleSubmit} = useForm<ICar>();
    const save:SubmitHandler<ICar>= async (car)=>{
        const {data} = await carService.create(car)
        setCars( prev =>[...prev,data])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="number" placeholder={'year'} {...register('year')}/>
                <input type="number" placeholder={'price'} {...register('price')}/>
                <button>Save</button>
            </form>
        </div>
    );
};
export default CarForm