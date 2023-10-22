import React from 'react'
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

const Importancy = ({handleEnableButton, updateImportancy}) => {
    const [importancy, setImportancy] = useState("");
    const handleImportancySelection = (importance) => {
        setImportancy(importance); // Atualiza o estado do componente com a importância da música selecionada
        updateImportancy(importance); // Atualiza o estado do componente Questionary com a importância da música selecionada
        handleEnableButton(true); // Notifica o componente Questionary que o botão de confirmação pode ser habilitado
      }

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-semibold text-gray-700'>How would you rank the music
importance in this event?</h1>
            <div className='flex flex-col gap-3 justify-center w-full items-center'>
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${importancy == "The music is the main purpose of it"?"bg-green-200 border-green-700":""}`} onClick={() => handleImportancySelection('The music is the main purpose of it')}>
                    The music is the main purpose of it
                </button>
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${importancy == "Music is really important for it"?"bg-green-200 border-green-700":""}`} onClick={() => handleImportancySelection('Music is really important for it')}>
                    Music is really important for it
                </button>
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${importancy == "Music would be good, but it is not vital"?"bg-green-200 border-green-700":""}`} onClick={() => handleImportancySelection('Music would be good, but it is not vital')}>
                    Music would be good, but it is not vital
                </button>
                <button className={`w-[90%] h-14 bg-white rounded-lg border ${importancy == "It is not necessary"?"bg-green-200 border-green-700":""}`} onClick={() => handleImportancySelection('It is not necessary')}>
                    It is not necessary
                </button>
            </div>
        </div>
    )
}

export default Importancy