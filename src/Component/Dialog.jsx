import React from 'react';
import st from '../styles/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={st.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={st.dialog}>{props.message}</div>
    );
}
const Dialog = (props) => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <DialogItem name="First Man" id="1"/>
                <DialogItem name="Second Man" id="2"/>
            </div>
            <div className={st.messages}>
                <Message message="Мы здесь пишем?"/>
                <Message message="Ага..."/>
            </div>
        </div>
    );
};

export default Dialog;