import {FC, useEffect} from 'react'
import {joiResolver} from "@hookform/resolvers/joi";

import {SubmitHandler, useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {IUseState} from "../../types/useStateType";
import {ICar} from "../../interfaces/car.interface";
import {carValidator} from "../../validators/car.validator";
import './CarForm.css'

interface IProps {
    setCars: IUseState<ICar[]>
    carForUpdate: ICar | null
    setState: IUseState<boolean>
    setCarForUpdate: IUseState<ICar | null>
}

const CarForm: FC<IProps> = ({
                                 setCars, carForUpdate,
                                 setState, setCarForUpdate
                             }) => {

    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: {errors, isValid}
    } = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)

            // Object.entries(carForUpdate).forEach(([key, value]) => {
            //     if (key !== 'id') {
            //         setValue(key as keyof ICar, value, {shouldValidate: true})
            //     }
            // })
        }

    }, [carForUpdate])
    const save: SubmitHandler<ICar> = async (car) => {
        const {data} = await carService.create(car)
        setCars(prev => [...prev, data])
        reset()

    }
    const update: SubmitHandler<ICar> = async (car) => {
        const {data} = await carService.updateById(carForUpdate!.id, car)
        setState(prevState => !prevState)
        reset();
        setCarForUpdate(null)
    }


    return (
        <div className={'car_container'}>
            <form className={'car_form_teg'} onSubmit={handleSubmit(carForUpdate ? update : save)}>

                <div className={'input_car_form'}>
                    <input type="text" placeholder={'brand'} {...register('brand')}/>
                    <div className={'errors'}>{errors.brand && <div>{errors.brand.message}</div>}</div>
                </div>

                <div className={'input_car_form'}>
                    <input type="number" placeholder={'price'} {...register('price')}/>
                    <div className={'errors'}>{errors.price && <div>{errors.price.message}</div>}</div>
                </div>

                <div className={'input_car_form'}>
                    <input type="number" placeholder={'year'} {...register('year')}/>
                    <div className={'errors'}>{errors.year && <div>{errors.year.message}</div>}</div>
                </div>

                <button className={'delete_update'} disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};
export default CarForm