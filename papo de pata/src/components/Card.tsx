const Card = ({imagemCard, tituloCard, paragraphCard}: any) => {
   return (
      <div className="card">
         <div className="conteiner-img-card">
            <img src={imagemCard} alt="imagem de um cão" className="img-card" />
         </div>

         <div className="conteiner-texto-card">
            <h3>{tituloCard}</h3>
            <p>{paragraphCard}</p>
            <span>Descubra essa transformação na nossa matéria completa!</span>
         </div>
      </div>
   );
};

export default Card;
