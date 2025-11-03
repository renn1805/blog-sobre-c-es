import iconeInstagramFooter from "../../public/img-instagram.png";
import logoFooter from "../../public/logo-principal--papo-de-pata.png";
import iconeWhatsappFooter from "../../public/img-whatsapp.png";

import "../assets/styles/Footer.css";
const Footer = () => {
   return (
      <footer>
         <img
            src={iconeInstagramFooter}
            alt=""
            className="icone-footer"
         />
         <img src={logoFooter} alt="" className="logo-footer" />
         <img
            src={iconeWhatsappFooter}
            alt=""
            className="icone-footer"
         />
      </footer>
   );
};

export default Footer;
