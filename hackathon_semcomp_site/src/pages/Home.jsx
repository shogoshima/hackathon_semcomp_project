import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Home = () => {
    // data: dados que serão pegos do banco de dados
    const [data, setData] = useState({ list: [] });
    const navigate = useNavigate();

    // função que executará apenas uma vez, seta os dados
    // no banco de dados
    useEffect(() => {
        const savedData = localStorage.getItem('gotemham')
        if (savedData) {
            setData(JSON.parse(savedData));
            console.log(JSON.parse(savedData))
        }
    }, []);

    // leva para a página de maiores informações sobre o evento
    function sendToAbout(index) {
        localStorage.setItem('indexOfSelectedEvent', JSON.stringify(index))
        navigate('/about');
    }

    return (
        <div className='flex pt-12 flex-col mx-10'>
            <div className='text-4xl font-extrabold text-purple-700 w-full'>Musicœur</div>
            <div className='text-2xl font-bold w-full flex mt-5'>
                <h1 className=''>Good to see you, </h1><h1 className='text-green-400'> Gabriel</h1>!
            </div>
            <div className='mt-5'>
                <NavLink to="/questionary" >
                    <div className='my-3 bg-white px-3 py-6 cursor-pointer border-l-4 border-green-300 rounded-xl '>
                        <h2 className='text-xl font-bold'>Create a new Event</h2>
                        <p className='text-gray-400 text-sm mt-2'>Did you know? Ambient music can foster a welcoming and interesting environment that entices customers to browse their offerings for an extended period of time and make purchases.</p>
                    </div>
                </NavLink>
                <h2 className='text-xl font-semibold mt-8'>See your current events:</h2>
                <div id="user_events">
                    {
                        data.list.map((item, index) => {
                            return(
                                <button className='flex w-full justify-start py-4 border-fuchsia-500 pl-2 items-start bg-white mt-3 rounded-xl border-l-4' onClick={() => sendToAbout(index)} key={index}> {item.info['description']} </button>
                            ) 
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home