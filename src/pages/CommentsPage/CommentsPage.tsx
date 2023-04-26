import {FC} from 'react'

import Comments from "../../components/Comments/Comments";

interface IProps {

}

const CommentsPage: FC<IProps> = () => {
    return (
        <div>
            <Comments/>
        </div>
    );
};
export default CommentsPage