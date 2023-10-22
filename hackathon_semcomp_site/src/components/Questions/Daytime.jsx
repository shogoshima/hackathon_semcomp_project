import React from 'react'
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

const Daytime = ({handleEnableButton , updateDaytime}) => {
    const [timevar,setTimevar]=useState('');
    const handleTimeSelection = (time) => {
        updateDaytime(time); // Atualiza o estado do componente Questionary com o valor selecionado
        setTimevar(time);
        handleEnableButton(true); // Notifica o componente Questionary que o botão de confirmação pode ser habilitado
    }

    return (
        <div className=''>
            <h1 className='text-3xl font-semibold text-gray-700'>In which time of the day will the event happen?</h1>
            <div className='flex flex-wrap mt-10 gap-5 justify-center'>
                <div onClick={() => handleTimeSelection('morning')} className={`flex items-center gap-3 cursor-pointer rounded-md w-44 justify-center py-6 bg-white ${timevar=="morning"?"bg-green-100 border-green-500":"bg-white"} pointer border`}>
                    <button>Morning</button>
                    <FeatherIcon icon="sun" color="orange" />
                </div>
                <div onClick={() => handleTimeSelection('afternoon')} className={`flex items-center gap-3 cursor-pointer rounded-md w-44 justify-center py-6 bg-white ${timevar=="afternoon"?"bg-green-100 border-green-500":"bg-white"} pointer border`}>
                <button >Afternoon</button>
                    <FeatherIcon icon="sunset"  color="orange"/>
                </div>
                <div onClick={() => handleTimeSelection('evening')}className={`flex items-center gap-3 cursor-pointer rounded-md w-44 justify-center py-6 bg-white ${timevar=="evening"?"bg-green-100 border-green-500":"bg-white"} pointer border`}>
                <button >Evening</button>
                    <FeatherIcon icon="moon" color="blue"/>
                </div>
                <div onClick={() => handleTimeSelection('full-day')}className={`flex items-center gap-3 cursor-pointer rounded-md w-44 justify-center py-6 ${timevar=="full-day"?"bg-green-100 border-green-500":"bg-white"} pointer  border`}>
                <button>Full Day</button>
                    <FeatherIcon icon="music" />
                </div>
            </div>
        </div>
    )
}

export default Daytime