import {IRes} from "../types/axios.type";
import {IAlbums} from "../interfaces/albums.interface";
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const albumsService ={
    getAll: ():IRes<IAlbums[]> => axiosService.get(urls.albums)
}