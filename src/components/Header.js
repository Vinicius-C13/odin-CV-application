import React from 'react';

export default function Header() {
    
    const styles = {
        display: 'flex', 
        justifyContent: 'center', 
        backgroundColor: 'blue', 
        color: 'white',
        marginBottom: '3rem'
    }

    return (
        <header style={styles}>
            <h1>CV Generator</h1>
        </header>
    )
}