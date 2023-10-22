import FeatherIcon from 'feather-icons-react'
import React from 'react'
import { useState } from 'react'

const Intention = ({handleEnableButton, updateIntention}) => {
    const [intention, setIntention] = useState(""); // Estado que armazena a intenção do evento selecionada
    const handleIntentionSelection = (intention) => {
        updateIntention(intention); // Atualiza o estado do componente Questionary com a intenção do evento selecionada
        handleEnableButton(true); // Notifica o componente Questionary que o botão de confirmação pode ser habilitado
        setIntention(intention); // Atualiza o estado do componente Intention com a intenção do evento selecionada
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-700'>What is the feeling you are trying to make your audience feel?</h1>
            <div className='flex flex-wrap mt-10 gap-5 justify-center'>
                <button className={`w-36 bg-white py-4 rounded-md border cursor-pointer ${intention=="Euphoric"?"bg-green-100 border-green-700":""}`} onClick={() => handleIntentionSelection('Euphoric')}>Euphoric</button>
                <button className={`w-36 bg-white py-4 rounded-md border cursor-pointer ${intention=="Relaxing"?"bg-green-100 border-green-700":""}`} onClick={() => handleIntentionSelection('Relaxing')}>Relaxing</button>
                <button className={`w-36 bg-white py-4 rounded-md border cursor-pointer ${intention=="Happiness"?"bg-green-100 border-green-700":""}`} onClick={() => handleIntentionSelection('Happiness')}>Happiness</button>
                <button className={`w-36 bg-white py-4 rounded-md border cursor-pointer ${intention=="Tension"?"bg-green-100 border-green-700":""}`} onClick={() => handleIntentionSelection('Tension')}>Tension</button>
                <button className={`w-36 bg-white py-4 rounded-md border cursor-pointer ${intention=="Safe"?"bg-green-100 border-green-700":""}`} onClick={() => handleIntentionSelection('Safe')}>Safe</button>
                <button className={`w-36 bg-white py-4 rounded-md border cursor-pointer ${intention=="Thrilling"?"bg-green-100 border-green-700":""}`} onClick={() => handleIntentionSelection('Thrilling')}>Thrilling</button>
            </div>
        </div>
    )
}

export default Intention