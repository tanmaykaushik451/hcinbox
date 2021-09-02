import React from 'react'

const Navigation = (props) => {

    const { open, toggleMenu } = props;


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" onClick={() => toggleMenu()}>Menu</a>
            <div>
                hello
            </div>
        </nav>

    )
}

export default Navigation
