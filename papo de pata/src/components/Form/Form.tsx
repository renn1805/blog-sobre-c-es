import {
   numeroForm,
   listaInformacoesForm1,
   listaInformacoesForm2,
} from "./informacoesInputs";
import Input from "./Input";
import Select from "./Select";
import Option from "./Option";
import {botaoProximoPasso} from "./FormArea";

// todo: terminar todos os casos de formulario
function gerarForm() {
   console.log(numeroForm);
   switch (numeroForm) {
      case 0:
         return listaInformacoesForm1.map((e, index) => (
            <Input
               key={index}
               descricao={e.descricao}
               tipoInput={e.tipoInput}
               placeholderInput={e.placeholderInput}
            />
         ));
         break;
      case 1:
         return listaInformacoesForm2.map((e, index) => (
            <Select
               key={index}
               selectName={e.selectName}
               optionName={e.options}
            />
         ));
         break;
   }
}

const Form = () => {
   return (
      // todo: fazer com que o botão de passar o formlario funcione corretamente
      <form>
         {botaoProximoPasso?.addEventListener("click", () => (gerarForm()))}
      </form>
   );
};

export default Form;
