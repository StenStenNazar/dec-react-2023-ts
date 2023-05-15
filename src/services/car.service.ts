import {IRes} from "../types/axios.type";
import {CarInterface} from "../interfaces/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IPaganation} from "../interfaces/pagination.interface";


 class CarService{
    getAll(): IRes<IPaganation<CarInterface[]>> {
         return axiosService.get(urls.cars)
    }
    create (car:CarInterface): IRes<CarInterface> {
       return  axiosService.post(urls.cars,car)
    }
    delete(id:number):IRes<void> {
      return   axiosService.delete(`${urls.cars}/${id}`)
    }
    update (id:number, car:CarInterface):IRes<CarInterface> {
       return  axiosService.put(`${urls.cars}/${id}`, car)
    }
}
export  const carService = new CarService();
