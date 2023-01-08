import React from "react";
import EducationItem from "./EducationItem";
import Button from "../Utils/Button";

export default function Personal(props) {
    return(
        <>
            <h2>Education</h2>
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
                        handleChange={props.handleChange}
                        removeField={props.removeField}
                    />
                )
            })}
            <Button text='Add' handleClick={props.addNewField}/>
        </>
    )
}