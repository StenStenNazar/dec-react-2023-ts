import {FC} from 'react'
import Albums from "../../components/Albums/Albums";

interface IProps {

}

const AlbumsPage: FC<IProps> = () => {
    return (
        <div>
            <Albums/>
        </div>
    );
};
export default AlbumsPage