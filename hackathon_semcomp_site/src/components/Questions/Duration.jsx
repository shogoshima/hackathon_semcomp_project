import FeatherIcon from 'feather-icons-react'
import React from 'react'
import { useState } from 'react'

const Duration = ({handleEnableButton, updateDuration}) => {
    const [duration, setDuration] = useState('') // Estado do componente Duration
    const handleDurationSelection = (duration) => {
        updateDuration(duration); // Atualiza o estado do componente Questionary com o valor selecionado
        handleEnableButton(true); // Notifica o componente Questionary que o botão de confirmação pode ser habilitado
        setDuration(duration); // Atualiza o estado do componente Duration com o valor selecionado
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-700'>What is the event duration?</h1>
            <div className='flex flex-col gap-3 mt-5'>        
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${duration == "2h Less"?"bg-green-200 border-green-700":""}`} onClick={() => handleDurationSelection('2h Less')}>2h Less</button>
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${duration == "2h - 4h"?"bg-green-200 border-green-700":""}`} onClick={() => handleDurationSelection('2h - 4h')}>2h - 4h</button>
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${duration == "4h - 8h"?"bg-green-200 border-green-700":""}`} onClick={() => handleDurationSelection('4h - 8h')}>4h - 8h</button>
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${duration == "8h+"?"bg-green-200 border-green-700":""}`} onClick={() => handleDurationSelection('8h+')}>8h+</button>
            </div>
        </div>
    )
}

export default Duration