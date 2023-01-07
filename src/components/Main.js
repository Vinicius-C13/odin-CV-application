import React from "react";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import emptyCV from "./Utils/EmptyCV";

export default function Main() {

    const [cv, setCv] = React.useState(emptyCV);

    React.useEffect(() => {
        console.log(cv.experience)
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
                /*...prevState,
                experience: [
                    {
                        ...prevState.experience[0],
                        [e.target.name]: e.target.value
                    }
                ]*/

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

    return (
        <>
            <CVForm cv = {cv} handlePersonalChange={handlePersonalChange} handleExperienceChange={handleExperienceChange}/>
        </>
    )
}