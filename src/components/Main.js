import React from "react";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import emptyCV from "./Utils/EmptyCV";
import { v4 as uuidv4 } from 'uuid';

export default function Main() {

    const [cv, setCv] = React.useState(emptyCV);

    React.useEffect(() => {
        console.log(cv)
    }, [cv])

    function handlePersonalChange(e) {

        setCv((prevState) => {
            return {
                ...prevState,
                personal: {
                    ...prevState.personal,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    function handleExperienceChange(e, id) {
        setCv((prevState) => {
            return {
                ...prevState,
                experience: prevState.experience.map(
                    (experienceItem) => {
                        if(experienceItem.id === id) {
                            return {
                                ...experienceItem,
                                [e.target.name]: e.target.value
                            }
                        } else {
                            return experienceItem
                        }
                    }
                )
            }
        })
    }

    function handleEducationChange(e, id) {
        setCv((prevState) => {
            return {
                ...prevState,
                education: prevState.education.map(
                    (educationItem) => {
                        if(educationItem.id === id) {
                            return {
                                ...educationItem,
                                [e.target.name]: e.target.value
                            }
                        } else {
                            return educationItem
                        }
                    }
                )
            }
        })
    }

    function addNewExperienceField() {

        function ExperienceItemFactory() {
            return {
                id: uuidv4(),
                cargo: "",
                empresa: "",
                cidade: "",
                inicio: "",
                fim: ""
            }
        }

        setCv((prevState) => {
            return {
                ...prevState,
                experience: [
                    ...prevState.experience,
                    ExperienceItemFactory()
                ]
            }
        })
    }

    function removeExperienceField(id) {

        setCv((prevState) => {
            return {
                ...prevState,
                experience: prevState.experience.filter(
                    (experienceItem) => experienceItem.id !== id
                )
            }
        })
    }

    function addNewEducationField() {

        function EducationItemFactory() {
            return {
                id: uuidv4(),
                universidade: "",
                curso: "",
                cidade: "",
                inicio: "",
                fim: ""
            }
        }

        setCv((prevState) => {
            return {
                ...prevState,
                education: [
                    ...prevState.education,
                    EducationItemFactory()
                ]
            }
        })
    }

    function removeEducationField(id) {
        setCv((prevState) => {
            return {
                ...prevState,
                education: prevState.education.filter(
                    (educationItem) => educationItem.id !==id
                )
            }
        })
    }

    return (
        <>
            <CVForm 
                cv={cv} 
                handlePersonalChange={handlePersonalChange} 
                handleExperienceChange={handleExperienceChange}
                handleEducationChange={handleEducationChange}
                addNewExperienceField={addNewExperienceField}
                removeExperienceField={removeExperienceField}
                addNewEducationField={addNewEducationField}
                removeEducationField={removeEducationField}
            />
            <CVPreview cv={cv}/>
        </>
    )
}