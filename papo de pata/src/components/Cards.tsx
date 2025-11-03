import Card from "./Card.tsx";
import {cards} from "./cards.ts";

// todo: fazer com que a função de mostrar mais funcione automaticamente, sem que precise recaregar a pagina toda vez quer atualiza o navegador
const Cards = () => {
   return (
      <section className="conteiner-cards">
         {cards.map((card, index) => (
            <Card
               key={index}
               imagemCard={card.imagemCard}
               tituloCard={card.titleCard}
               paragraphCard={card.paragraphCard}
            />
         ))}
      </section>
   );
};

export default Cards;
