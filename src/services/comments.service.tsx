import {IRes} from "../types/axios.type";
import {IComments} from "../interfaces/comments.interface";
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const commentsService ={
    getAll:():IRes<IComments[]> => axiosService.get(urls.comments)
}