import React from 'react';
import Button from '../../Utils/Button';

export default function Name(props) {

    const [showForm, setShowForm] = React.useState(false);

    function toggleForm() {
        setShowForm((prevState) => {return !prevState})
    }

    const content = 
        <>
            <Button handleClick={toggleForm} text='modify'/>
            <h1>{props.firstname} {props.lastname}</h1>
        </>

    const form = 
        <form>
            <input 
                value={props.firstname} 
                name="firstname" 
                placeholder="Firstname"
                onChange={props.handleChange}
            />

            <input 
                value={props.lastname} 
                name="lastname" 
                placeholder="Lastname"
                onChange={props.handleChange}
            />
            <Button handleClick={toggleForm} text='send'/>
        </form>

    return (
        showForm?  form : content
    )
}