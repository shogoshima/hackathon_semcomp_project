import React from 'react'
import { useState, useEffect } from 'react'

const NotStarted = ({ dataObject }) => {
    if (!dataObject || Object.keys(dataObject).length === 0) {
        return <div/>;
    }
    return (
        <div>
            <div>
                <h1>Your Event: {dataObject.info['description']}</h1>
                <div>
                    <h1>Has</h1>
                    <h1>not Started</h1>
                    <h1>yet!</h1>
                </div>
            </div>
            <div>
                <h2>Musics playing now:</h2>
                <div>
                    {/* {
                        dataObject.songs.map((item, index) => {
                            return <div key={index}> Music: {item[0]} <br /> Artist: {item[1]} </div>
                    })} */}
                </div>
            </div>
            <button>Regenerate Playlist</button>
            <button>Start Event</button>
        </div>
    )
}

export default NotStarted