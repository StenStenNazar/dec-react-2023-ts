import {FC} from 'react'

import {IAlbums} from "../../interfaces/albums.interface";
import './Album.css'

interface IProps{
    album: IAlbums
}

const Album: FC<IProps> = ({album}) =>{
    const {id,title} = album;
return(
       <div className={'album'}>
            <li>{id}</li>
           <li>{title}</li>
       </div>
    );
};
export default Album