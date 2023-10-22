import FeatherIcon from 'feather-icons-react'
import React from 'react'
import { useState } from 'react'

const Audience = ({ handleEnableButton,updateAudience}) => {
    const [audience, setAudience] = useState('') // Estado que armazena o público-alvo selecionado
    const handleAudienceSelection = (audience) => {
        updateAudience(audience); // Atualiza o estado do componente Questionary com o público-alvo selecionado
        handleEnableButton(true); // Notifica o componente Questionary que o botão de confirmação pode ser habilitado
        setAudience(audience); // Atualiza o estado do componente Audience com o público-alvo selecionado
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-700'>What is the target audience?</h1>
            <div className='flex flex-wrap gap-3 mt-5 justify-center'>
                <button className={`w-40 h-14 bg-white border rounded-md border${audience=="Children"?" bg-green-200 border-green-600":""}`} onClick={() => handleAudienceSelection('Children')}>Children</button>
                <button className={`w-40 h-14 bg-white border rounded-md border${audience=="Teenagers"?" bg-green-200 border-green-600":""}`} onClick={() => handleAudienceSelection('Teenagers')}>Teenagers</button>
                <button className={`w-40 h-14 bg-white border rounded-md border${audience=="Adults"?" bg-green-200 border-green-600":""}`} onClick={() => handleAudienceSelection('Adults')}>Adults</button>
                <button className={`w-40 h-14 bg-white border rounded-md border${audience=="Elderly"?" bg-green-200 border-green-600":""}`} onClick={() => handleAudienceSelection('Elderly')}>Elderly</button>
                <button className={`w-40 h-14 bg-white border rounded-md border${audience=="Children & Adults"?" bg-green-200 border-green-600":""}`} onClick={() => handleAudienceSelection('Children & Adults')}>Children & Adults</button>
                <button className={`w-40 h-14 bg-white border rounded-md border${audience=="All audience"?" bg-green-200 border-green-600":""}`} onClick={() => handleAudienceSelection('All audience')}>All audience</button>
            </div>
        </div>
    )
}

export default Audience