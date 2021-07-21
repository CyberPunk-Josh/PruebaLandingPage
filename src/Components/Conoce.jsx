import React from 'react';
import Items from '../img/items.png';

const Conoce = () => {
    return ( 
        <section className="Conoce_section">
            <h2 className="mt-4 text-center">Conoce Lorem ipsum dolor sit.</h2>
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center aw-vertical-align">
                    <ul>
                        <li>Registrate y forma parte de la nueva era digital!</li>
                        <li>Aprovecha tu tiempo en casa u oficina</li>
                        <li>Obten clientes potenciales en todo el pais</li>
                    </ul>
                    <span className='RectRegister mt-5'>Registrate!</span>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-start aw-vertical-align">
                    <img src={Items} alt="user items" />
                </div>
            </div>
        </section>
     );
}
 
export default Conoce;