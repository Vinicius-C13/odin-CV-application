import React from 'react';
import Button from '../../Utils/Button';

export default function Skills(props) {
    
    const [showForm, setShowForm] = React.useState(false);

    const [skills, setSkills] = React.useState(['teste', 'teste 1'])

    function toggleForm() {
        setShowForm((prevState) => {return !prevState})
    }

    function addSkill(e) {
        e.preventDefault()

        const taskInput = document.querySelector('#task-input')

        setSkills((prevState) => {
            return prevState = [taskInput.value, ...prevState]
        })
        console.log(e)
    }

    function removeSkill(e) {
        setSkills((prevState) => {
            return prevState.filter(skill => skill !== e.target.name)
        })
    }

    function handleFormSubmit(e) {
        addSkill(e)
        toggleForm()
    }

    const content = 
        <>
            <Button handleClick={toggleForm} text='modify'/>
            <ul>
                {skills.map(
                    (skill)=>{
                        return (
                            <div key={skill}>
                                <li>{skill}</li>
                                <Button handleClick={removeSkill} text='delete'/>
                            </div>
                        )
                    }
                )}
            </ul>
        </>

    const form = 
        <form onSubmit={handleFormSubmit}>
            <input 
                placeholder="Add skill"
                id='task-input'
            />
            <Button handleClick={toggleForm} text='send'/>
        </form>


    return (
        showForm ? form : content
    )
}