import React from "react";
import {useState} from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

interface CustomValues {
    text: string
}

function Todo(props:CustomValues) {
    // First value is current, second is function to change it
    const [isModalOpen, setIsModalOpen ] = useState(false); // This is a "react hook"

    function deleteHandler() {
        setIsModalOpen(true);
    }

    function closeDeleteModalHandler() {
        setIsModalOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {/*{isModalOpen ? <Modal/> : null}*/}
            {isModalOpen && <Modal onCancel={closeDeleteModalHandler} onConfirm={closeDeleteModalHandler} />}
            {isModalOpen && <Backdrop onCancel={closeDeleteModalHandler} />}
        </div>
    )
}

export default Todo