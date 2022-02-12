import React from "react";

import "../assets/css/card.css"

function Card () {
    return(

        
        <section className="section-card container">
            <div className="card">
                
                <div className="foto_redes">
                    <img className="foto_card" src="https://avatars.githubusercontent.com/u/69609443?v=4"
                        alt="Foto do Daniel" />
                    <div className="redes"> <a href="https://www.linkedin.com/in/gabriel-imenes-789744209" target="_blank"><i
                                className='bx bxl-linkedin rede-icon'></i></a> <a
                            href="https://github.com/imenesg" target="_blank"><i
                            className='bx bxl-github rede-icon'></i></a> </div>
                </div>
            </div>
        </section>
        
    );
}

export default Card; 