import React from "react";
import EducationItem from "./EducationItem";
import Button from "../Utils/Button";

export default function Personal(props) {
    return(
        <div style={props.style.form_general}>
            <h2>Education</h2>
            <div>
                {props.cv.map((educationArray) => {
                    return (
                        <EducationItem
                            key={educationArray.id}
                            id={educationArray.id}
                            universidade={educationArray.universidade}
                            curso={educationArray.curso}
                            cidade={educationArray.cidade}
                            inicio={educationArray.inicio}
                            fim={educationArray.fim}
                            detalhes={educationArray.detalhes}
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