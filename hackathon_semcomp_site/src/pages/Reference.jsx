import React from 'react'
import { Link } from 'react-router-dom'

const Reference = () => {
    return (
        <div>
            <h1>Why did you click in reference?</h1>
            <Link to="/">Home</Link><br/>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Reference