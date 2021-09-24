import './App.css';
import Clothes from "../Clothes/Clothes";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <span className="logo">Helpful-app</span>
      </header>
      <main className="main">
        <Clothes />
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
