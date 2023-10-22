import React from 'react'
import { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';

const Local = ({handleEnableButton, updateLocal}) => {

    const [text, setText] = useState("");
    
    function handleSetText(val) {
        setText(val);
    }
    
    useEffect(() => {
        if(text.length > 0) {
            handleEnableButton(true)
            updateLocal(text);
        }
    },[text]);

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-semibold text-gray-700'>Where will the event be held?</h1>
            <p className='text-gray-400 font-semibold'>Try to be concise, giving a direct answer of the event place, like: “Church”, “Coffee”, “Saloon”, “Elevator”, “House”, etc.</p>
            <input type="text" className='h-16 rounded-md border px-5' placeholder='Add your text here.' value={text} onChange={(e) => handleSetText(e.target.value)}></input>
        </div>
    )
}

export default Local