import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    const [info, setInfo] = useState(null)
    const getData = () => {
    fetch("http://localhost:8080/get_data")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setInfo(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Now this is the about page</h1>
            <button onClick={getData}>get data</button>
            { info ? <h1>{info.MRData.RaceTable.Races[0].raceName}</h1> : <div /> }
            <Link to="/">Home</Link><br/>
            <Link to="/reference">Reference</Link>
        </div>
    )
}

export default About