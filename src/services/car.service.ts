import {IRes} from "../types/axios.type";
import {CarInterface} from "../interfaces/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const carService = {
    getAll: (): IRes<CarInterface[]> => axiosService.get(urls.cars),
    create: (car:CarInterface): IRes<CarInterface> => axiosService.post(urls.cars,car),
    delete:(id:number):IRes<void> => axiosService.delete(`${urls.cars}/${id}`),
    update: (id:number, car:CarInterface):IRes<CarInterface> => axiosService.put(`${urls.cars}/${id}`, car)
}