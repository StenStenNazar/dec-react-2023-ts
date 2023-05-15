import {FC} from 'react'
import {ErrorInterface} from "../../interfaces/error.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
    errors: ErrorInterface
}

const Errors: FC<IProps> = ({errors}) => {
    console.log(errors)
    const navigate = useNavigate();
    const {price, year, brand,detail} = errors;
    return (
        <div>
            {detail && <div>сесія закінчилася, для відновлення сесії пройдіть логінацію
            <button onClick={()=>navigate('/login')}>login</button>
            </div>}
            {price && <div>price:{price}</div>}
            {year && <div>year:{year}</div>}
            {brand && <div>brand:{brand}</div>}
        </div>
    );
};
export default Errors