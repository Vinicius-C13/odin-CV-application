import React from "react"

export default function Footer () {

    const styles={
        backgroundColor: 'blue', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        color: 'white',
        marginTop: '3rem'
    }

    return (
        <footer style={styles}>
            <p>Copyright © 2023 vinícius costa</p><button>GitHub</button>
        </footer>
    )
}