import axios from "axios";
import {carBaseUrl, holderBaseUrl} from "../constants/urls";

const carAxiosService = axios.create({baseURL: carBaseUrl})
const holderAxiosService = axios.create({baseURL: holderBaseUrl})

export {
    holderAxiosService,
    carAxiosService
}