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
            <div>
                <h4>Address</h4>
                <p>{props.address}</p>
            </div>
            <div>
                <h4>Phone</h4>
                <p>{props.phone}</p>
            </div>
            <div>
                <h4>Email</h4>
                <p>{props.email}</p>
            </div>
        </>

    const form = 
        <form>
            <input 
                value={props.address} 
                name="address" 
                placeholder="Address"
                onChange={props.handleChange}
            />
            <input 
                value={props.phone} 
                name="phone" 
                placeholder="Phone"
                onChange={props.handleChange}
            />
            <input 
                value={props.email} 
                name="email" 
                placeholder="Email"
                onChange={props.handleChange}
            />
            <Button handleClick={toggleForm} text='send'/>

        </form>

    return (
        showForm?  
        <><h3>Personal Details</h3>{form}</> : 
        <><h3>Personal Details</h3>{content}</>
    )
}