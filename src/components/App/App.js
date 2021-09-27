import './App.css';
import Clothes from "../Clothes/Clothes";
import Header from "../Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Clothes />
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
