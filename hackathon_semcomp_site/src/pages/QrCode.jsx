import React from 'react'
import qrcode from '../assets/qrcode.png'

/*
O QR code redirecionaria para uma página em que o usuário
poderia dar os feedbacks (like, deslike e comentários)
Esses feedbacks seriam enviados para o backend, onde 
utilizaremos a API da cohere.
*/
const Qrcode = () => {
    return (
        <div className='w-full h-full py-10 flex flex-col items-center px-5 justify-between'>
            <img src={qrcode} className='w-1/2 mt-20 p-5 bg-white rounded-md'></img>
            <button className='w-[100%] mt-5 py-3 px-5 rounded-md bg-green-500 font-bold text-white'>Share QR Code</button>
        </div>
    )
}

export default Qrcode