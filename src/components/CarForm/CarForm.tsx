import {FC, useEffect} from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarInterface} from "../../interfaces/car.interface";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {carActions} from "../../redux/slices/carSlice";
import {carValidator} from "../../validators/car.validator";

interface IProps {

}

const CarForm: FC<IProps> = () => {
    const {register, reset, handleSubmit, setValue, formState: {errors}} = useForm<CarInterface>({
        mode: 'all', resolver: joiResolver(carValidator)
    });
    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.carReducer)

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])


    const save: SubmitHandler<CarInterface> = (car) => {
        dispatch(carActions.createCar({car}))
        reset()
    }

    const update: SubmitHandler<CarInterface> = (car) => {
        dispatch(carActions.updateCar({id: carForUpdate!.id, car: car}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate ? 'update' : 'save'}</button>
            </form>
            <div>
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
                {errors.brand && <div>{errors.brand.message}</div>}
            </div>
        </div>

    );
};
export default CarForm