import {IRes} from "../types/axios.type";
import {IPost} from "../interfaces/post.interface";
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const postService ={
    getById : (id:string):IRes<IPost> =>axiosService.get(`${urls.posts}/${id}`)
}