import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../assets/OIP.png';

function Header(){
       return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>

                    <Link to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    
                    <Link to='/comentarios'>
                        <li>Comentarios</li>
                    </Link>

                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    nome: PropTypes.string
}

export default Header; 