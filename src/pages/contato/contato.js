import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footerblack/footer';

function Contatos() {
  return (
    <>
    <Header />
    <div id='banner1'></div> 
      <div className="contact">
        <h1>Entre em Contato Conosco!</h1>
        </div>
        <form action="formulario" id='form'>
          <input type="name" name="name" placeholder="Coloque seu nome" />
          <input type="email" name="email" placeholder="Coloque um e-mail válido" />
          <textarea name="mensagem" id="mensagem" rows="10" placeholder="Escreva sua mensagem aqui">
          </textarea>
          <button id="button">Enviar</button>
        </form>       
      <Footer Black/>
    </>    
  )
}

export default Contatos;