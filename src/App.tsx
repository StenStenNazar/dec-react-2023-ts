import React from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import Cars from "./components/Cars/Cars";
import NotFound from "./components/NotFound/NotFound";
import UserLogin from "./components/UserLogin/UserLogin";
import UserRegister from "./components/UserRegister/UserRegister";



function App() {
  return (
    <div className="App">
        <Routes>
            <Route index element={<Navigate to={'login'}/>}/>
            <Route path={'login'} element={<UserLogin/>}/>
            <Route path={'register'} element={<UserRegister/>}/>
            <Route path={'cars'} element={<Cars/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
