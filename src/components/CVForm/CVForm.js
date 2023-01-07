import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

export default function CVForm(props) {

    return (
        <div>
            <Personal 
                cv={props.cv.personal}
                handleChange={props.handlePersonalChange}
            />

            <Experience
                cv={props.cv.experience}
                handleChange={props.handleExperienceChange}
            />
        </div>
    )
}