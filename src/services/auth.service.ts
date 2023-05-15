import {IUser} from "../interfaces/user.interface";
import {ILogReg} from "../interfaces/logReg.interface";
import {IRes} from "../types/axios.type";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {ITokens} from "../interfaces/tokens.interface";
import {AxiosResponse} from "axios";


class AuthService {
    private readonly accessKey: string = 'access'
    private readonly refreshKey: string = 'refresh'

    registration(user: ILogReg): IRes<IUser> {
        return axiosService.post(urls.auth.users, user)
    }
    me():IRes<IUser>{
        return  axiosService.get(urls.auth.me)
    }
    async login(user: ILogReg): Promise<void> {
        const {data}: AxiosResponse<ITokens> = await axiosService.post(urls.auth.auth, user);
        this.setTokensLS(data)
    }

    setTokensLS({access, refresh}: ITokens): void {
        localStorage.setItem(this.accessKey, access)
        localStorage.setItem(this.refreshKey, refresh)
    }

    getAccessToken(): string {
        return localStorage.getItem(this.accessKey)
    }

    async refresh(): Promise<void> {
        const refreshToken = this.getRefreshToken();
        if (!refreshToken) {
            throw new Error("token not exists - please re-log in")
        }
            const {data} = await axiosService.post(urls.auth.refresh, {refresh: refreshToken});
            this.setTokensLS(data)
            console.log('токени перезаписалися!')
    }

    getRefreshToken(): string {
        return localStorage.getItem(this.refreshKey)
    }

    deleteTokenAccessKey(): void {
        return localStorage.removeItem(this.accessKey)
    }

    deleteTokensRefreshKey(): void {

        return localStorage.removeItem(this.refreshKey)
    }
}

export const authService = new AuthService();