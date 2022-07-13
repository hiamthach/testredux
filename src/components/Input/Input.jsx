import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo, updateTodo } from "../Main/todosSlice";
import "./input.scss";

export default function Input(props) {
    const [inputValue, setInputValue] = useState(props.value);
    const dispatch = useDispatch();

    const handleCheckClick = () => {
        if (props.id) {
            dispatch(updateTodo({ data: { title: inputValue }, id: props.id }));
            props.cancel(false);
        } else {
            dispatch(addNewTodo({ title: inputValue, completed: false }));
            setInputValue("");
            props.setNewCancel(false);
        }
    };

    const handleCancelClick = () => {
        if (props.id) {
            props.cancel(false);
        } else {
            props.setNewCancel(false);
        }
    };

    return (
        <div className='input'>
            <input
                type='text'
                placeholder='Type todo...'
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                value={inputValue}
            />
            <div className='input-btns'>
                <div
                    className='input-btns__check'
                    onClick={() => {
                        handleCheckClick();
                    }}>
                    <i className='fa-solid fa-check'></i>
                </div>
                <div
                    className='input-btns__cancel'
                    onClick={() => {
                        handleCancelClick();
                    }}>
                    <i className='fa-solid fa-xmark'></i>
                </div>
            </div>
        </div>
    );
}
