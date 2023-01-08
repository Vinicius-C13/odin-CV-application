import React from "react";
import ExperienceItem from "./ExperienceItem";
import Button from "../Utils/Button";

export default function Personal(props) {
    return(
        <>
            <h2>Experience</h2>
            {props.cv.map((experienceArray) => {
                return (
                    <ExperienceItem
                        key={experienceArray.id}
                        id={experienceArray.id}
                        cargo={experienceArray.cargo} 
                        empresa={experienceArray.empresa} 
                        cidade={experienceArray.cidade} 
                        inicio={experienceArray.inicio} 
                        fim={experienceArray.fim}
                        handleChange={props.handleChange}
                        removeField={props.removeField}
                    />
                )
            })}
            <Button text='Add' handleClick={props.addNewField}/>
        </>
    )
}