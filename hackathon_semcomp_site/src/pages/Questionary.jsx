import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Description from '../components/Questions/Description.jsx'
import Daytime from '../components/Questions/Daytime.jsx'
import Importancy from '../components/Questions/Importancy.jsx'
import Audience from '../components/Questions/Audience.jsx'
import Intention from '../components/Questions/Intention.jsx'
import Local from '../components/Questions/Local.jsx'
import Duration from '../components/Questions/Duration.jsx'
import axios from 'axios';

/*
Questionário para o host responder.
As respostas serão gravados em um objeto, e os dados
serão enviados para o backend, onde ele retornará 
a playlist de música
*/
const Questionary = () => {

    const navigate = useNavigate();
    const[description, setDescription] = useState("");
    const[daytime, setDaytime] = useState("");
    const[importancy, setImportancy] = useState("");
    const[intention, setIntention] = useState("");
    const[duration, setDuration] = useState("");
    const[audience, setAudience] = useState("");
    const[local, setLocal] = useState("");
    const [finished, setFinished] = useState(false);
    
    const [currentQuestion, setCurrentQuestions] = useState(0);
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        if (currentQuestion == 7)
            setFinished(true)
    }, [currentQuestion])

    const makeRequest = async (event) => {
        let baseUrl = "http://10.10.3.204:5000/get_playlist"
        
        try {
            const response = await axios.get(baseUrl,{params:event.info})
                // salvar response.data no localstorage              
            
            console.log(response);
        } catch (error) {
            console.error("erro ao tentar fazer a requisicao");
        }
    }

    useEffect(() => {

        if (finished == true) {
            let data = JSON.parse(localStorage.getItem("gotemham"));
            let event = {
                info: {
                    "description": description,
                    "daytime": daytime,
                    "importancy": importancy,
                    "intention": intention,
                    "duration": duration,
                    "audience": audience,
                    "local": local,
                },
                stats: {
                    "started": false,
                    "ended": false,
                }
            }
            console.log(event)
            data.list.push(event)
            localStorage.setItem("gotemham", JSON.stringify(data))
            makeRequest(event);
            navigate('/');
        }
    }, [finished])

   useEffect(() => {
    
    let event = {
        info: {
            "description": "",
            "daytime": "",
            "importancy": "",
            "intention": "",
            "duration": "",
            "audience": "",
            "local": "",
        },
        stats: {
            "started": false,
        }
    }
    makeRequest(event);
    },[])
    const handleMoveNextQuestion = () => {
        if(currentQuestion < 7){
            setCurrentQuestions(currentQuestion + 1);
            setEnabled(false);
        }
    }
    //this function will be receive from child component if the confirm button is enabled
    const handleEnableButton = (enable) => {
        setEnabled(enable);
    }
    const updateDescription = (description) => {
        setDescription(description);
    }
    const updateDaytime = (daytime) => {
        setDaytime(daytime);
    }
    const updateImportancy = (importancy) => {
        setImportancy(importancy);
    }
    const updateIntention = (intention) => {
        setIntention(intention);
    }
    const updateDuration = (duration) => {
        setDuration(duration);
    }
    const updateAudience = (audience) => {
        setAudience(audience);
    }
    const updateLocal = (local) => {
        setLocal(local);
    }
    
    return (
        <div className='mx-5 py-2 font-noto h-full flex flex-col justify-between'>
            <div>
                <div className='flex w-full flex-col my-5 '>
                    <div className='flex flex-row w-full justify-between mb-3 text-gray-400'>
                        <p>Question {currentQuestion + 1}</p>
                        <p>of 7</p>
                    </div>
                    <div className='w-full h-2 bg-zinc-300 rounded-full transition-all'>
                        <div className={`h-2 bg-green-500 rounded-full`}
                            style={{ width: `${((currentQuestion + 1) / 7) * 100}%` }}
                        >
                        </div>
                    </div>
                </div>
                <div className='flex h-full justify-center items-center'>
                    { 
                        currentQuestion == 0?<Description handleEnableButton = {handleEnableButton} updateDescription={updateDescription}/>:
                        currentQuestion == 1?<Daytime handleEnableButton = {handleEnableButton} updateDaytime={updateDaytime}/>:
                        currentQuestion == 2?<Importancy handleEnableButton = {handleEnableButton} updateImportancy={updateImportancy}/>:
                        currentQuestion == 3?<Intention handleEnableButton = {handleEnableButton} updateIntention={updateIntention}/>:
                        currentQuestion == 4?<Duration handleEnableButton = {handleEnableButton} updateDuration={updateDuration}/>:
                        currentQuestion == 5?<Audience handleEnableButton = {handleEnableButton} updateAudience={updateAudience}/>:
                        currentQuestion == 6?<Local handleEnableButton = {handleEnableButton} updateLocal={updateLocal}/> : null
                    }
                </div>
            </div>
                {
                    enabled == true ? 
                        <button className='w-full h-12 rounded-lg bg-green-400 mb-2 text-white font-semibold text-2xl' onClick={() => handleMoveNextQuestion()}>Confirm</button> : 
                        <button className='w-full h-12 rounded-lg bg-gray-200 border mb-2 font-semibold text-gray-600 text-2xl'  onClick={()=>{}}>Confirm</button>    
                        
                }
        </div>
    )
}

export default Questionary