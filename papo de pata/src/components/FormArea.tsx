import "../assets/styles/FormArea.css";
import Input from "./Input";
import {listaInformacoesInput1} from "./informacoesInputs";

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
                  <h3>Informaçõs pessoais</h3>
               </li>
               <div className="conteiner-form">
                  <form id="primeiro-form"> 
                     {listaInformacoesInput1.map((e) => (
                        <Input
                           descricao={e.descricao}
                           tipoInput={e.tipoInput}
                           placeholderInput={e.placeholderInput}
                        />
                     ))}
                  </form>
                  <button className="botaoProximoPasso" type="submit" form="primeiro-form"><h3>Próximo Passo</h3></button>
               </div>
            </ol>
         </div>
      </section>
   );
};

export default FormArea;
