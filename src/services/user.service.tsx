import {IRes} from "../types/response.type";
import {IUser} from "../interfaces/user.interface";
import {holderAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const userService = {
    getAll: (): IRes<IUser[]> => holderAxiosService.get(urls.holderApi.users),
    create: (user: IUser): IRes<IUser> => holderAxiosService.post(urls.holderApi.users, user)

}
export {
    userService
}