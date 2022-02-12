import React from "react";




function Projeto(props){
    return(
        <a href={props.link} target="_blank">
        <div className="projeto">
           {/* <!--Titulo projeto-->*/}
            <h3>{props.titulo}</h3>
            {/*<!--Titulo projeto-->*/}

            {/*<!--Pixel art-->*/}
            <img className="img_projeto" src={props.img} alt="">
            {/*<!--Pixel art-->*/}</img>
        </div>
    </a>
    )
}

export default Projeto; 