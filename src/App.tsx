import React from 'react';
import {Route, Routes} from "react-router-dom";

import TodoPages from "./pages/TodoPages/TodoPages";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import Header from "./components/Header/Header";
import './App.css'
import CommentsPost from "./components/CommentsPost/CommentsPost";

function App() {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/todos'} element={<TodoPages/>}/>
                <Route path={'/albums'} element={<AlbumsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}>
                    <Route path={':id'} element={<CommentsPost/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
