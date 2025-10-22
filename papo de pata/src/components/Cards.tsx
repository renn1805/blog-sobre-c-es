import Card from "./Card.tsx";
import {cards} from "./cards.ts";

const Cards = () => {
   return (
      <section className="conteiner-cards">
         {cards.map((card) => (
            <Card
               imagemCard={card.imagemCard}
               tituloCard={card.titleCard}
               paragraphCard={card.paragraphCard}
            />
         ))}
      </section>
   );
};

export default Cards;
