import React, { useState } from "react";
import "./todo.scss";

import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../Main/todosSlice";

export default function Todo(props) {
    const [completed, setCompleted] = useState(props.completed);
    const [toolOpen, setToolOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const handleCheckClick = () => {
        setCompleted(!completed);
        dispatch(updateTodo({ data: { completed: !completed }, id: props.id }));
    };

    const jsx = isEdit ? (
        <Input
            value={props.title}
            id={props.id}
            cancel={(cancelEdit) => setIsEdit(cancelEdit)}
        />
    ) : (
        <div className='todo'>
            <div
                className={`todo__check ${completed ? "completed" : ""}`}
                onClick={() => {
                    handleCheckClick();
                }}>
                <i className='fa-solid fa-check'></i>
            </div>
            <h3 className='todo__title'>{props.title}</h3>
            <div
                className='todo__tools'
                onClick={() => {
                    setToolOpen(!toolOpen);
                }}
                onMouseLeave={() => {
                    setToolOpen(false);
                }}>
                <i className='fa-solid fa-ellipsis-vertical'></i>
                <div
                    className='todo__tools-box'
                    style={{ display: toolOpen ? "block" : "none" }}>
                    <div
                        className='todo__tools-box--wrap'
                        onClick={() => {
                            setIsEdit(true);
                        }}>
                        Edit
                        <i className='fa-solid fa-pen-to-square'></i>
                    </div>
                    <div
                        className='todo__tools-box--wrap'
                        onClick={() => {
                            dispatch(deleteTodo(props.id));
                        }}>
                        Delete
                        <i className='fa-solid fa-trash'></i>
                    </div>
                </div>
            </div>
        </div>
    );
    return <>{jsx}</>;
}
