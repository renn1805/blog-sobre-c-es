import "../assets/styles/Header.css";
import videoCaoHeader from "../../public/video-cao-header.mp4"


const Header = () => {
   return( 
   <header className="conteiner-video">
        <video autoPlay muted loop playsInline>
            <source src={videoCaoHeader} type="video/mp4"/>
        </video>
   </header>
   )
};

export default Header;
