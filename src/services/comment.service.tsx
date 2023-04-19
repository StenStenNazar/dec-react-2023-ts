import {IComment} from "../interfaces/comment.interface";
import {IRes} from "../types/response.type";
import {holderAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentService = {
    getAll: (): IRes<IComment[]> => holderAxiosService.get(urls.holderApi.comments),
    create: (comment: IComment): IRes<IComment> => holderAxiosService.post(urls.holderApi.comments, comment),
}

export {
    commentService
}