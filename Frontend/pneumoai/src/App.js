
import './App.css';
import imgSrc from './img/img.png';


function App() {
  return (
    <div className="App">
      <div className='heading'>
        <h1>PneumoAI</h1>
      </div>
      <button>Next</button>
      <img src={imgSrc} alt="Example" />
    </div>
  );
}

export default App;
