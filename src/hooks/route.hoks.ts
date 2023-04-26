import {useLocation,Location} from "react-router-dom";


interface IState<T> extends Location{
    state: T
}

 export const useAppLocation = <T>():IState<T> => useLocation();