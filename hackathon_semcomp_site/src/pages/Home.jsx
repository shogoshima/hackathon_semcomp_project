import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Hi, this is the home page</h1>
            <h1 className="text-3x1 font-bold text-red-500 underline text-center">Hello world!</h1>
            <h2 className="font-mono text-blue-700 text-center mt-3">So, as you can see, Tailwind is working</h2>
            <Link to="/about">About</Link><br/>
            <Link to="/reference">Reference</Link>
        </div>
    )
}

export default Home