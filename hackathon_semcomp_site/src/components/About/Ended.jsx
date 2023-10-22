import React from 'react'
import { useState, useEffect } from 'react'

const Ended = ({dataObject}) => {
    if (!dataObject || Object.keys(dataObject).length === 0) {
        return <div/>;
    }
    return (
        <div>
            <div>
                <h1>Your Event: {dataObject.info['description']}</h1>
                <div>
                    <h1>Has</h1>
                    <h1>ended</h1>
                    <h1>, see the feedback your audience gave you!</h1>
                </div>
            </div>
            <div>Graph is here</div>
            <div>
                <div>
                    <div>Cor</div>
                    <h3>The music was pretty good</h3>
                </div>
                <div>
                    <div>Cor</div>
                    <h3>The music was decent</h3>
                </div>
                <div>
                    <div>Cor</div>
                    <h3>The music was not good</h3>
                </div>
            </div>
            <button>Repeat Event</button>
        </div>
    )
}

export default Ended