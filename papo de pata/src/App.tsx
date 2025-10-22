import "./assets/styles/resets.css";
import "./assets/styles/Main.css";

import Navbar from "./components/navbar.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import FormArea from "./components/FormArea.tsx";
const App = () => {
   return (
      <div>
         <Navbar />
         <Header />
         <Main />
         <FormArea />
      </div>
   );
};

const botao: HTMLElement | null = document.querySelector(".botaoVerCards");
const lista = document.querySelectorAll(".card");
if (lista[3] && lista[4] && lista[5] instanceof HTMLElement) {
   lista[3].classList.add("inativo");
   lista[4].classList.add("inativo");
   lista[5].classList.add("inativo");
}

let mostrarMaisAtivo: boolean = false;
if (botao) {
   botao.addEventListener("click", () => {
      mostrarMaisAtivo = !mostrarMaisAtivo;
      if (mostrarMaisAtivo === false) {
         botao.innerHTML = "<h2>Mostrar Mais</h2>";
      } else {
         botao.innerHTML = "<h2>Mostrar Menos</h2>";
      }

      for (let i = 3; i < lista.length && i <= 5; i++) {
         if (lista[i] instanceof HTMLElement) {
            lista[i].classList.toggle("inativo");
         }
      }
   });
}

const formulario: HTMLElement | null = document.querySelector("form");

if (formulario instanceof HTMLElement) {
   formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = document.querySelectorAll<HTMLInputElement>(
         "#primeiro-form input"
      );
      interface IputsValores {
         inputNome: any;
         inputTel: any;
         inputEmail: any;
         inputData: any;
         inputProfissao: any;
      }
      const inputValores: IputsValores = {
         inputNome: inputs[0].value,
         inputTel: inputs[1].value,
         inputEmail: inputs[2].value,
         inputData: inputs[3].value,
         inputProfissao: inputs[4].value,
      };
      console.log(inputValores);
      inputs.forEach((input) => {
         input.value = "";
      });
   });
}

export default App;
