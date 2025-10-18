import imgInstagram from "../../public/img-instagram.png"
import imgLogo from "../../public/logo-principal--papo-de-pata.png"
import imgWhatsapp from "../../public/img-whatsapp.png"

import "../assets/styles/Navbar.css"

const Navbar = () => {
   return (
      <nav>
         <div className="conteiner-instagram-nav">
            <img src={imgInstagram} alt="logotipo do instagram" className="img-instagram"/>
         </div>
         <div className="conteiner-logo-nav">
            <img src={imgLogo} alt="Logotipo papo de pata" className="img-logotipo"/>
         </div>
         <div className="conteiner-whatsapp-nav">
            <img src={imgWhatsapp} alt="logotipo whatsapp" className="img-whatsapp"/>
         </div>
      </nav>
   );
};

export default Navbar;
