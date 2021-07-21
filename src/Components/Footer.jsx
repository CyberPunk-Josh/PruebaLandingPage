import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';

const Footer = () => {
    return ( 
        <footer className="footer_app mt-5 py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-3 columna-footer">
                    <h4 className='text-center text-light'>Contacto</h4>
                    <ul className="nav text-center d-flex flex-column justify-content-center">
                        <li className="nav-item text-light">Telefono <span className="text-light mb-3">Lorem ipsum dolor</span></li>
                        <li className="nav-item text-light">Correo Electronico <span className="text-light mb-3">Loremipsumdolor</span></li>
                        <li className="nav-item text-light">Direccion <span className="text-light mb-3">Lorem ipsum dolor</span></li>
                    </ul>
                </div>
                <div className="col-md-3 columna-footer">
                    <h4 className='text-center text-light'>Acerca De</h4>
                    <ul className="nav text-center d-flex flex-column justify-content-center">
                        <li className="nav-item text-light">Beneficios</li>
                        <li className="nav-item text-light">Plus</li>
                        <li className="nav-item text-light">Plus</li>
                        <li className="nav-item text-light">Como Funciona?</li>
                    </ul>
                </div>
                <div className="col-md-3 columna-footer">
                    <h4 className='text-center text-light'>Como Funciona?</h4>
                    <ul className="nav text-center d-flex flex-column justify-content-center">
                        <li className="nav-item text-light">Informacion Adicional</li>
                        <li className="nav-item text-light">Terminos y condiciones</li>
                        <li className="nav-item text-light">Aviso de Privacidad</li>
                        <li className="nav-item text-light">Preguntas Frecuentes</li>
                    </ul>
                </div>
                <div className="col-md-3 columna-footer">
                    <h4 className='text-center text-light mb-3'>Redes Sociales</h4>
                    <ul className="nav d-flex flex-row justify-content-around align-items-center">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={linkedin} alt="linkedin" />
                    </ul>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;