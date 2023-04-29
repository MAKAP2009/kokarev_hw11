import React, { Fragment }  from "react";
import "./Modal.css";

const Modal = ({ onClose }) => {
    return (
        <Fragment>
            <div className="modal-wrapper" onClick={onClose}></div>
            <div className="modal-window">
                <button className="close-button" onClick={onClose}> 
                    X
                </button>
                <h2 style={{color:"violet"}}>Modal Window</h2>
                <p>Text ...</p>     
                <p>More text ...</p>    
                <button className={'confirmation-button'} onClick={onClose}>ОK</button>     
                <button className={'reject-button'} onClick={onClose}>Cancel</button>           
            </div>
        </Fragment>
    )
}

export default Modal;