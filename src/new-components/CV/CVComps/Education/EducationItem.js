import React from "react";
import Button from "../../Utils/Button";

export default function EducationItem(props){
    const {university, course, city, start, end, id, handleChange, removeField} = props

    const [showForm, setShowForm] = React.useState(false);

    function toggleForm() {
        setShowForm((prevState) => {return !prevState})
    }

    function EducationContent() {
        return (
            <div>
                <button onClick={toggleForm}></button>
                <ul>
                    <li>{university}</li>
                    <li>{course}</li>
                    <li>{city}</li>
                    <li>{start}</li>
                    <li>{end}</li>
                </ul>
            </div>
        )
    }

    function EducationForm() {
        return(
            <div>
                <div>
                    <input type="text" name="university" value={university} onChange={(e) => handleChange(e, id)} placeholder="university"/>
                    <br/>
                    <input type="text" name="course" value={course} onChange={(e) => handleChange(e, id)} placeholder="course"/>
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
        showForm ?  <EducationForm /> : <EducationContent />
    )
}