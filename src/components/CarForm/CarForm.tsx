import {FC} from 'react'

interface IProps{

}

const CarForm: FC<IProps> = () =>{
return(
       <form>
           <input type="text" placeholder={'brand'}/>
           <input type="text" placeholder={'price'}/>
           <input type="text" placeholder={'year'}/>
       </form>
    );
};
export default CarForm