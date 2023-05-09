import {FC} from 'react'
import {ErrorInterface} from "../../interfaces/error.interface";

interface IProps {
    errors: ErrorInterface
}

const Errors: FC<IProps> = ({errors}) => {
    console.log(errors)
    const {price, year, brand} = errors;
    return (
        <div>
            {price && <div>price:{price}</div>}
            {year && <div>year:{year}</div>}
            {brand && <div>brand:{brand}</div>}
        </div>
    );
};
export default Errors