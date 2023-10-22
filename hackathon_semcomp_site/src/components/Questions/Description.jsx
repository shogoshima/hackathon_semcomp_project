import React from 'react'
import { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';

const Description = ({handleEnableButton, updateDescription}) => {

    const [text, setText] = useState("");
    
    function handleSetText(val) {
        setText(val)
    }

    useEffect(() => {
        if(text.length > 0) {
            handleEnableButton(true);
            updateDescription(text);
        }
    },[text]);
    
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-semibold text-gray-700'>What is the theme of your event?</h1>
            <p className='text-gray-400 font-semibold'>Try to be concise, giving a short description of the event, like: “Religious”, “Confraternization”, “Festive”, “thrilling”, “scary”, etc.</p>
            <input type="text" placeholder='Add your text here.' className='h-16 rounded-md border px-5' value={text} onChange={(e) => handleSetText(e.target.value)}></input>
        </div>
    )
}

export default Description