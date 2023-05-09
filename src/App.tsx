import React from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import Cars from "./components/Cars/Cars";
import NotFound from "./components/NotFound/NotFound";



function App() {
  return (
    <div className="App">
        <Routes>
            <Route index element={<Navigate to={'cars'}/>}/>
            <Route path={'cars'} element={<Cars/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
