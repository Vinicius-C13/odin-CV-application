import React from 'react';
import Button from '../../Utils/Button';

export default function Title(props) {

    const [showForm, setShowForm] = React.useState(false);

    function toggleForm() {
        setShowForm((prevState) => {return !prevState})
    }

    const content = 
        <>
            <Button handleClick={toggleForm} text='modify'/>
            <h2>{props.value}</h2>
        </>

    const form = 
        <form>
            <input 
                value={props.value} 
                name="title" 
                placeholder="Title"
                onChange={props.handleChange}
            />
            <Button handleClick={toggleForm} text='send'/>
        </form>

    return (
        showForm?  form : content
    )
}