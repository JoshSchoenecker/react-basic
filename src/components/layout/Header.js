import React from 'react';

function Header() {
    return (
        <header 
// @ts-ignore
        style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle= {
    textAlign: 'center',
    background: '#333',
    color: '#fff',
    padding: '1rem'
}

export default Header