import './App.css';
import Header from "../Header/Header";
import {useState} from "react";
import {categoriesKeys, categoriesValues} from "../../data";
import Clothes from "../Clothes/Clothes";

const App = () => {
  const [keys, setKeys] = useState(categoriesKeys);
  const [values, setValues] = useState(categoriesValues);

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Clothes keys={keys} values={values} />
        </main>
        <footer className="footer">

        </footer>
      </div>
    </div>
  );
}

export default App;
