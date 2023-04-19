import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Header from "./componets/Header/Header";
import Users from './componets/Users/Users';
import Comments from "./componets/Comments/Comments";
import Cars from './componets/Cars/Cars';

function App() {
    return (
        <div>
            <Header/>
            <Routes>
              <Route path='/users' element={<Users/>}/>
              <Route path='/comments' element={<Comments/>}/>
              <Route path='/cars' element={<Cars/>}/>
            </Routes>
        </div>
    );
}

export default App;
