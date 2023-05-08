import {FC} from 'react'
import {CarInterface} from "../../interfaces/car.interface";

interface IProps{
car:CarInterface
}

const Car: FC<IProps> = ({car}) =>{
    const { brand,price,year,id} = car
return(
       <div>
           <div><b>id</b>:{id}</div>
           <div><b>brand</b>:{brand}</div>
           <div><b>price</b>:{price}</div>
           <div><b>year</b>:{year}</div>
       </div>
    );
};
export default Car