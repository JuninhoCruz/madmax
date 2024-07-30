import React from 'react'
import './styles.css'

function Button({ name, active, onClick }){


    return (
        <div className='containerButton'>
            <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estão salvo conosco</span>
        </div>
    )
}

export default Button // Essa é a maneira mais fácil de criar um componente.