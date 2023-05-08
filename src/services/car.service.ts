import {IRes} from "../types/axios.type";
import {CarInterface} from "../interfaces/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

 export const carService = {
    getAll:():IRes<CarInterface[]> => axiosService.get(urls.cars)
}