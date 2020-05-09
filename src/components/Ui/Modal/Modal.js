import React from 'react';

import classes from './Modal.module.css'

function Modal(props) {
        return (
        <div>
             {props.show ? <div className={classes.Backdrop} onClick={props.modalClosed}></div> : null}
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <div className="modal-header">
                    <h5 className="modal-title">{props.title}</h5>
                    <button type="button" className="close" onClick={props.modalClosed} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>    
                 <div className="modal-body">
                     <p>{props.msg}</p>
                 </div>
                 <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" onClick={props.modalClosed}>Close</button>
                 </div>            
            </div>
        </div>
    );
}

export default Modal;