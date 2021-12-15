import "./App.css";
import searchlogo from "./searchlogo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={searchlogo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Nathalie Rognon</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
