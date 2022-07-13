import React, { useState } from "react";
import "./main.scss";

import { todoListSelector, todoListStatus } from "../../redux/selectors";
import Todo from "../Todo/Todo";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";

export default function Main() {
    const IMG =
        "https://static.vecteezy.com/system/resources/previews/000/241/070/large_2x/flat-boy-with-vintage-glasses-avatar-vector-illustration.jpg";
    const [openInput, setOpenInput] = useState(false);
    
    const todoList = useSelector(todoListSelector);
    const todoStatus = useSelector(todoListStatus);

    const handleOpenInput = () => {
        setOpenInput(true);
    }

    return (
        <div className='main'>
            <img className='main-ava' src={IMG} alt='' />
            <h1>
                Good Morning <br /> Thach.
            </h1>
            <h6>{todoList.length} tasks</h6>
            <div className='main-todo__list'>
                {todoStatus === "loading" ? <Loading /> : ""}
                    <ul id="todos" >
                        {
                            todoList.map((todo, index) => (        
                            <li key={index} className='main-todo__item'>
                                <Todo {...todo} />
                            </li>                                
                            ))
                        }
                    </ul>    
                {openInput ? (
                    <Input
                        setNewCancel={(newCancel) => {
                            setOpenInput(newCancel);
                        }}
                    />
                ) : (
                    ""
                )}
            </div>
            <div className='main-button' onClick={handleOpenInput}>
                <Button>Add New Task</Button>
            </div>
        </div>
    );
}
