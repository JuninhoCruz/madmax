import React, { lazy, Suspense, useState } from 'react';
import Profile from '../../components/profile/profile';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import Header from '../../components/header/header';
import Video from '../../assets/video.mp4'
import Cards from '../../components/cards';
import Fotos from '../fotos/fotos';
import Contato from '../contato/contato';
import Footer from '../../components/footer/footer';
import Contact from '../../components/contact/contact';
import Comentarios from '../comentarios/comentarios';

function Home(){
    return (
        <>
            <Header currentPage={'home'} />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                    <source src={Video} />
                    Seu navegador não possui suporte para vídeos.
                </video>  

                <div id='sinopse'>
                    <p className='description'>
                    Em um mundo pós-apocalíptico, Max Rockatansky acredita que a melhor forma de
                    sobreviver é não depender de ninguém. Porém, após ser capturado pelo tirano
                    Immortan Joe e seus rebeldes, Max se vê no meio de uma guerra mortal iniciada
                    pela Imperatriz Furiosa, que tenta salvar um grupo de garotas.
                    Também tentando fugir, Max aceita ajudá-la. 
                    </p>
                    <button className='button'>Comprar ingresso</button>
                   </div>
             </div>
        </div>
        <Cards />
        <Footer />
        
    </> 
    )
}

export default Home;