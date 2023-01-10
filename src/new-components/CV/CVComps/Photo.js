import React from 'react';
import Button from '../../Utils/Button';

export default function Photo(props) {

    const [showForm, setShowForm] = React.useState(false);

    function toggleForm() {
        setShowForm((prevState) => {return !prevState})
    }

    const content = 
        <>
            <Button handleClick={toggleForm} text='modify'/>
            <div>
                <img src={props.value} style={{width: '80%'}}/>
            </div>
        </>

    const form = 
        <form>
            <input value={props.value} onChange={props.handleChange}/>
            <button onClick={toggleForm}>Send</button>
        </form>

    return (
        showForm?  form : content
    )
}