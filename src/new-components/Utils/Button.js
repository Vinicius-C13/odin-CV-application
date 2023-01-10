import React from "react";

export default function EditButton(props) {
    return (
        <button onClick={props.handleClick}><img src='../../assets/editar.png'/></button>
    )
}