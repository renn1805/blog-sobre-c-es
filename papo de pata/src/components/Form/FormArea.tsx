import "../../assets/styles/FormArea.css";

import Form from "./Form";

const FormArea = () => {
   return (
      <section className="form-area">
         <h2 className="titulo-section-form-area">Adote um companheiro</h2>
         <p className="paragrafo-section-form-area">
            Está pronto para mudar uma vida? Preencha o formulário abaixo e
            comece sua jornada de adoção
         </p>
         <div className="conteiner-ol-form">
            <ol>
               <li>
                  <h3>Informações pessoais</h3>
               </li>
               <div className="conteiner-form">
                  <Form />
                  <button
                     className="botaoProximoPasso"
                     type="submit"
                     form="primeiro-form">
                     <h3>Próximo Passo</h3>
                  </button>
               </div>
            </ol>
         </div>
      </section>
   );
};
export const botaoProximoPasso: HTMLElement | null = document.querySelector(
   "button.botaoProximoPasso"
);
console.log(botaoProximoPasso);

export default FormArea;
