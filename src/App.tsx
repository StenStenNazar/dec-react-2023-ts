import React from 'react';

import {Navigate, Route, Routes} from "react-router-dom";
import Cars from "./components/Cars/Cars";



function App() {
  return (
    <div className="App">
      <h1>hello</h1>
        <Routes>
            <Route index element={<Navigate to={'cars'}/>}/>
            <Route path={'cars'} element={<Cars/>}/>
        </Routes>
    </div>
  );
}

export default App;
