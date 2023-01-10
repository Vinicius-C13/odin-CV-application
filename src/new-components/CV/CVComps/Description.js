import React from 'react';
import Button from '../../Utils/Button';

export default function Description(props) {

    const [showForm, setShowForm] = React.useState(false);

    function toggleForm() {
        setShowForm((prevState) => {return !prevState})
    }

    const content = 
        <>
            <Button handleClick={toggleForm} text='modify'/>
            <p>{props.value}</p>
        </>

    const form = 
        <form>
            <textarea 
                value={props.value} 
                name="description" 
                placeholder="description" 
                onChange={props.handleChange}
            >
            </textarea>
            <Button handleClick={toggleForm} text='send'/>
        </form>

    return (
        showForm?  form : content
    )
}