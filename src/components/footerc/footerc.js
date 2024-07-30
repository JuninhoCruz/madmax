import React from "react";
import './styles.css';
import Logo from '../../assets/OIP.png';

function FooterFotos(){
    return (
        <footerc>
            <img id='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Júninho Cruz</span>
        </footerc>
    )
}

export default FooterFotos;