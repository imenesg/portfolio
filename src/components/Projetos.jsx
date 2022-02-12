import React from "react";
import Projeto from "../components/Projeto"


import frutaefruto from "../assets/img/frutaefrutoedit.png"
import lista from "../assets/img/listaedit.png"
import polar from "../assets/img/polaredit.png"
import Yoandla from "../assets/img/YOANDLAedit.png"
import Rick_and_Morty from "../assets/img/Rick and Morty characters !edit.png"

function Projetos () {
    return(
        <section className="section_projetos container">
            <h2 className="FontP">top projetos</h2>
            <span className="instrucao">Clique sobre a foto e veja o projeto<i className='bx bxs-hand-up'></i></span>
            <div className="projetos">
                
            <Projeto link="https://imenesg.github.io/Fruta_E_Fruto/" titulo="Um projeto feito por mim no curso Alura" img={frutaefruto} />

            <Projeto link="https://imenesg.github.io/Lista-mercado/" titulo="Lista de mercado digital" img={lista} />

            <Projeto link="https://polarsites.com.br/" titulo="Site polar" img={polar} />

            <Projeto link="https://imenesg.github.io/YOANDLA/" titulo="Yoandla" img={Yoandla} />

            <Projeto link="https://imenesg.github.io/Rick-and-Morty-characters/" titulo="Rick and Morty characters !" img={Rick_and_Morty} />
            </div>



           {/* <a href="todosProjetos.html">
                <div className="button FontP">+ projetos</div>
    </a>*/}
        </section>
    );
}

export default Projetos; 