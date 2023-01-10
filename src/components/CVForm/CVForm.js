import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

export default function CVForm(props) {

    const styles = {
        CV_Container: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f2f2f2',
            width: '600px',
            marginInline: 'auto',
            marginBottom: '3rem',
            padding: ' 70px 30px',
            gap: '30px'
        },

        form_general: {
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: 'lightgray',
            borderRadius: '10px',
        },

        inputs: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '30px'
        },

        personal: {
            
        },

        experience: {
            width: '100%'
        },

        education: {
            width: '100%'
        }
    }

    return (
        <div style={styles.CV_Container}>
            <Personal 
                cv={props.cv.personal}
                handleChange={props.handlePersonalChange}
                style={styles}
            />

            <Experience
                cv={props.cv.experience}
                handleChange={props.handleExperienceChange}
                addNewField={props.addNewExperienceField}
                removeField={props.removeExperienceField}
                style={styles}
            />
            <Education
                cv={props.cv.education}
                handleChange={props.handleEducationChange}
                addNewField={props.addNewEducationField}
                removeField={props.removeEducationField}
                style={styles}
            />
        </div>
    )
}