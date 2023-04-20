import {FC} from 'react'
import {Link} from "react-router-dom";

import './Header.css'

interface IProps {

};

const Header: FC<IProps> = () => {
    return (
        <div className={'header'}>
            <Link to='/users'>
                <div>Users</div>
            </Link>
            <Link to='/comments'>
                <div>Comments</div>
            </Link>
            <Link to='/cars'>
                <div>Cars</div>
            </Link>
        </div>
    );
};

export default Header