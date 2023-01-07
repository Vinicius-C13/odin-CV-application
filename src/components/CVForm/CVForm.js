import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

export default function CVForm(props) {

    return (
        <div>
            <Personal 
                cv = {props.cv}
                handleChange = {props.handleChange}
            />
        </div>
    )
}