import React, {FC} from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

interface IProps{

}

const Header: FC<IProps> = () =>{
return(
       <div className={'header'}>
           <Link to={'/todos'}><div className={'nav'}>todos</div></Link>
           <Link to={'/albums'}><div className={'nav'}>albums</div></Link>
           <Link to={'/comments'}><div className={'nav'}>comments</div></Link>
       </div>
    );
};
export default Header