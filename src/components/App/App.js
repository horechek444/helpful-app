import './App.css';
import Clothes from "../Clothes/Clothes";
import Header from "../Header/Header";
import {useState} from "react";
import {categoriesKeys, categoriesValues} from "../../data";

const App = () => {
  const [keys, setKeys] = useState(categoriesKeys);
  const [values, setValues] = useState(categoriesValues);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Clothes keys={keys} values={values} />
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
