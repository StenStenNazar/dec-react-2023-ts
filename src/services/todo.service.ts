import {IRes} from "../types/axios.type";
import {ITodo} from "../interfaces/todo.interface";
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const todoService = {
    getAll: (): IRes<ITodo[]> => axiosService.get(urls.todos)
}
