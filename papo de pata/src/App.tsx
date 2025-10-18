import "./assets/styles/resets.css";
import Navbar from "./components/navbar.tsx";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import "./assets/styles/Main.css";
const App = () => {
   return (
      <div>
         <Navbar />
         <Header />
         <Main />
      </div>
   );
};

export default App;
