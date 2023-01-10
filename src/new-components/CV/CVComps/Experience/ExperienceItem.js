import React from "react";
import Button from "../../Utils/Button";

export default function EducationItem(props){
    const {charge, company, city, start, end, id, handleChange, removeField} = props

    const [showForm, setShowForm] = React.useState(false);

    function toggleForm() {
        setShowForm((prevState) => {return !prevState})
    }

    function ExperienceContent() {
        return (
            <div>
                <button onClick={toggleForm}></button>
                <ul>
                    <li>{charge}</li>
                    <li>{company}</li>
                    <li>{city}</li>
                    <li>{start}</li>
                    <li>{end}</li>
                </ul>
            </div>
        )
    }

    function ExperienceForm() {
        return(
            <div>
            <div>
                <input type="text" name="charge" value={charge} onChange={(e) => handleChange(e, id)} placeholder="charge"/>
                <br/>
                <input type="text" name="company" value={company} onChange={(e) => handleChange(e, id)} placeholder="company"/>
                <br/>
                <input type="text" name="city" value={city} onChange={(e) => handleChange(e, id)} placeholder="city"/>
                <br/>
                <input type="text" name="start" value={start} onChange={(e) => handleChange(e, id)} placeholder="start"/>
                <br/>
                <input type="text" name="end" value={end} onChange={(e) => handleChange(e, id)} placeholder="end"/>
                <br/>
                <br/>
                <Button text='Delete' handleClick={() => removeField(id)}/>
            </div>
            <br/>
        </div>
        )
    }

    return(
        showForm ?  <ExperienceForm /> : <ExperienceContent />
    )
}