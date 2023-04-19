import {IRes} from "../types/response.type";
import {ICar} from "../interfaces/car.interface";
import {carAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: (): IRes<ICar[]> => carAxiosService.get(urls.carApi.cars),
    create: (car: ICar): IRes<ICar> => carAxiosService.post(urls.carApi.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => carAxiosService.put(urls.carApi.byId(id), car),
    delete: (id: number): IRes<ICar> => carAxiosService.delete(urls.carApi.byId(id))

}

export {
    carService
}