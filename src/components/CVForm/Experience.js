import React from "react";
import ExperienceItem from "./ExperienceItem";
import Button from "../Utils/Button";

export default function Personal(props) {
    return(
        <div style={props.style.form_general}>
            <h2>Experience</h2>
            <div>
                {props.cv.map((experienceArray) => {
                    return (
                        <ExperienceItem
                            key={experienceArray.id}
                            id={experienceArray.id}
                            cargo={experienceArray.cargo}
                            empresa={experienceArray.empresa}
                            cidade={experienceArray.cidade}
                            inicio={experienceArray.inicio}
                            detalhes={experienceArray.detalhes}
                            fim={experienceArray.fim}
                            handleChange={props.handleChange}
                            removeField={props.removeField}
                            style={props.style.inputs}
                        />
                    )
                })}
            </div>
            <Button text='Add' handleClick={props.addNewField}/>
        </div>
    )
}