import React from 'react';
import Description from "../CVComps/Description";
import Name from "../CVComps/Name";
import PersonalInfo from "../CVComps/PersonalInfo";
import Photo from "../CVComps/Photo";
import Skills from "../CVComps/Skills";
import Title from "../CVComps/Title";

export default function TemplateOne(props) {

    const {info} = props

    return (
        <div className="cv-container">
            <div className='header'>
                <Name 
                    firstname={info.cv.personal.firstname} 
                    lastname={info.cv.personal.lastname} 
                    handleChange={info.handlePersonalChange}
                />
                <Title 
                    value={info.cv.personal.title}
                    handleChange={info.handlePersonalChange}
                />
            </div>
            <div className='sidebar'>
                <Photo 
                    value={info.cv.personal.photo}
                    handleChange={info.handlePersonalChange}
                />
                <PersonalInfo 
                    phone={info.cv.personal.phone} 
                    email={info.cv.personal.email} 
                    address={info.cv.personal.address}
                    handleChange={info.handlePersonalChange}
                />
                <Skills 
                    value={info.cv.personal.skills}
                />
            </div>
            <div className='main'>
                <Description 
                    value={info.cv.personal.description} 
                    handleChange={info.handlePersonalChange}
                />
            </div>
        </div>
    )
}