import axios from "axios";

import {baseURL} from "../constants/urls";
import {authService} from "./auth.service";


export const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(res => {
    const access: string = authService.getAccessToken();
    if (access) {
        res.headers.Authorization = `Bearer ${access}`
    }
    return res
})

axiosService.interceptors.response.use(res => {
        return res
    },
    async error => {
        console.log(error.response.data.detail)
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._isRefresh ){
            originalRequest._isRefresh = true
                await authService.refresh()
                return axiosService(originalRequest)
            }
        if(error.response.data.detail === 'Token is invalid or expired'){
            authService.deleteTokenAccessKey()
            authService.deleteTokensRefreshKey()
        }
        return Promise.reject(error)
    })



