import React, { useState, useEffect } from 'react'
import Ended from '../components/About/Ended'
import Happening from '../components/About/Happening'
import NotStarted from '../components/About/NotStarted'
import { data } from 'autoprefixer'

/*
Ideia da página de about é o host poder controlar algumas
funcionalidades do planejamento das músicas do evento.
1. Antes do evento, o usuário poderia gerar novamente uma nova
playlist, e também poderia começar o evento quando quiser
2. Durante o evento, teria as principais funcionalidades. 
O host pode, lá, verificar os feedbacks atuais, gerar o QR Code
que o usuário (que estará atendendo o evento) poderá ler para entrar
em uma página que serve como ferramenta de envio de feedback. Nela, 
o usuário poderia deixar um like ou dislike, ou um comentário (opcional).
Além disso, o host pode terminar o evento. Após terminar o evento,
o host seria redirecioniado para uma página onde todas os feedbacks
estarão em um gráfico
3. Após o evento, o usuário poderia verificar os feedbacks novamente,
e também repetir o evento.
*/
const About = () => {
    const [dataObject, setDataObject] = useState({});
    const [isStarted, setIsStarted] = useState(true);
    const [isEnded, setIsEnded] = useState(false);
    useEffect(() => {
        const index = JSON.parse(localStorage.getItem('indexOfSelectedEvent'));
        const data = JSON.parse(localStorage.getItem('gotemham'));
        if (data && data.list && data.list[index]) {
            const dataObj = data.list[index];
            setDataObject(dataObj);
            if (dataObj.stats.started) {
                setIsStarted(true);
            }
            if (dataObj.stats.ended){
                setIsEnded(true);
            }
        }
    }, []); 
    return (
        <div>
            {
            (isStarted && !isEnded) ? <Happening dataObject={dataObject} /> :
            isEnded ? <Ended dataObject={dataObject} /> :
            <NotStarted dataObject={dataObject} />
            }
        </div>
    );
}

export default About;