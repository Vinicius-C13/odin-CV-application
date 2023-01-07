import React from "react";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import emptyCV from "./Utils/EmptyCV";

export default function Main() {

    const [cvPersonal, setCvPersonal] = React.useState(emptyCV.personal);

    React.useEffect(() => {
        console.log(cvPersonal)
    }, [cvPersonal])

    function handleChange(e) {

        setCvPersonal((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <CVForm cv = {cvPersonal} handleChange={handleChange}/>
        </>
    )
}