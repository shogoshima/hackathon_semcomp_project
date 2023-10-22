import React from 'react'
import { useNavigate } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';

const Happening = ({ dataObject }) => {
    const navigate = useNavigate();
    if (!dataObject || Object.keys(dataObject).length === 0) {
        return <div/>;
    }
    function navigateToQrcode() {
        navigate('/qrcode')
    }
    return (
        <div className='px-5 pt-10 w-full'>
            <div className='text-4xl font-extrabold text-purple-700 w-full'>Musicœur</div>
            <div className='text-lg font-semibold mt-5'>
                <h1>Your Event: {dataObject.info['description']}</h1>
                <div className='flex gap-2'>
                    <h1>Is</h1>
                    <h1 className='text-blue-600'>happening</h1>
                    <h1>now!</h1>
                </div>
            </div>
            <div className='mt-5 bg-white border p-5 flex flex-col gap-2'>
                <h2 className='font-semibold underline decoration-blue-600'>Musics on your playlist:</h2>
                <div className='flex flex-col gap-1'>
                    <div className="flex gap-3 w-[60%] justify-between">
                        <h3 className='text-lg'>The Zephyr Song</h3>
                        <div className='p-1 bg-blue-400 rounded-full'>
                            <FeatherIcon icon="music" size={20} color="black"/>
                        </div>
                    </div>
                    <div className="flex gap-3 w-[60%] justify-between">
                        <h3 className='text-lg'>Can't Stop</h3>
                        <div className='p-1 bg-blue-400 rounded-full'>
                            <FeatherIcon icon="music" size={20} color="black"/>
                        </div>
                    </div>
                    <div className="flex gap-3 w-[60%] justify-between">
                        <h3 className='text-lg'>Under the Bridge</h3>
                        <div className='p-1 bg-blue-400 rounded-full'>
                            <FeatherIcon icon="music" size={20} color="black"/>
                        </div>
                    </div>
                    <div className="flex gap-3 w-[60%] justify-between">
                        <h3 className='text-lg'>Californication</h3>
                        <div className='p-1 bg-blue-400 rounded-full'>
                            <FeatherIcon icon="music" size={20} color="black"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start mt-5 w-full'>
                <button onClick={navigateToQrcode} className='w-[100%] py-3 px-5 rounded-md bg-blue-500 font-bold text-white'>Generate Feedback QR Code</button>
                <button className='w-[100%] mt-5 py-3 px-5 rounded-md bg-green-500 font-bold text-white'>See Live Feedbacks</button>
                <button className='w-[100%] mt-5 py-3 px-5 rounded-md bg-red-500 font-bold text-white'>Finish Event</button>
            </div>
        </div>
    )
}

export default Happening