import {FC, useEffect} from 'react'
import {ICar} from "../../interfaces/car.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {IUseState} from "../../types/useStateType";

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

    const {register, reset, handleSubmit, setValue, formState: {errors, isValid}} = useForm<ICar>();

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
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="number" placeholder={'year'} {...register('year')}/>
                <input type="number" placeholder={'price'} {...register('price')}/>
                <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};
export default CarForm