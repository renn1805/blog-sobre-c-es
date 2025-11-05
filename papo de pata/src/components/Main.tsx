import "../assets/styles/main.css";
import Cards from "./Cards/Cards.tsx";

const Main = () => {
   return (
      <main>
         <h2>Conheça mais sobre nossos amados companheiros</h2>
         <Cards />
         <button className="botaoVerCards">
            <h2>Mostrar mais</h2>
         </button>
      </main>
   );
};
export default Main;
