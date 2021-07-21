import React from 'react';
import UserImg from '../img/User.png';
import UserPc from '../img/pc_user.webp';

const Beneficios = () => {
    return ( 
        <section className="section_user">
            <div className="row container">
                <div className="col-md-6 d-flex flex-column justify-content-end aw-vertical-align align-items-center">
                    <img src={UserImg} alt="user image" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center aw-vertical-align">
                    <h2 className="text-light">Beneficios de la Plataforma</h2>
                    <img src={UserPc} alt="user pc" />
                    <p className="text-light text-center">Incrementa tus clientes potenciales desde tu celular o computadora.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Beneficios;