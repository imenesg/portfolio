import React from "react";

import "../assets/css/footer.css"


function Footer () {
    return(
        <footer className="container">
        {/*<!--<img class="logo_footer" src="logo" alt="">-->*/}

        <div className="redes"> <a href="https://www.linkedin.com/in/gabriel-imenes-789744209" target="_blank"><i
            className='bx bxl-linkedin rede-icon'></i></a> <a
        href="https://github.com/imenesg" target="_blank"><i
        className='bx bxl-github rede-icon'></i></a> </div>

           <div className="emailContato"><i className='bx  bx-mail-send email-icon'></i><p>imenesgabriel@gmail.com</p></div>

    </footer>
    )
}

export default Footer; 