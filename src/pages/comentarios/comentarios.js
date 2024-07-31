import React from 'react'
import './styles.css'
import Header from '../../components/header/header';
import Footerc from '../../components/footerc/footerc';

function Comentarios() {
    return (
        <>
        <Header/>
        <img className="imgfotos" src='https://i.pinimg.com/736x/35/48/f8/3548f844b8106409bdc93a6619cc1ea3.jpg' />
        <img className="imgfotos" src='https://i.pinimg.com/736x/dc/30/0a/dc300a70ba1fba373a7c1fe5491fcb16.jpg' />
        <img className="imgfotos" src='https://i.pinimg.com/736x/29/f9/18/29f9187fc80f3305f42623607f6e389e.jpg' />
        <div className='text'>Eu amei esse Filme!!! Realmente me surpreendi!<br/>Espero que façam outros para continuar a história.</div>
        <div className='text1'>Demais!!! A Furiosa é muito top!<br/> Conseguiu salvar todos junta do Mad!!!</div>
        <div className='text2'>Esperei um filme e <br/>assisti um FILMAÇO! Ansiosa pela continuação!</div>
        <Footerc/>
        </>
    );
}

export default Comentarios;