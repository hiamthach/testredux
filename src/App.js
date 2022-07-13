import React, { useEffect } from "react";
import "./styles/index.scss";
import Main from "./components/Main/Main";
import { useDispatch } from "react-redux";
import { getTodo } from "./components/Main/todosSlice";
import Loading from "./components/Loading/Loading";

// npm install --save react-beautiful-dnd --legacy-peer-deps
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodo());
    }, []);
    return (
        <div className='App'>
            <Main />
        </div>
    );
}

export default App;
