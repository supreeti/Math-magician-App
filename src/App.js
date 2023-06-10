import './App.css';
import Calculator from './component/calculator';
import FetchData from './component/fetchdata';

function App() {
  return (
    <>
      <div className="App">
        <Calculator />
      </div>
      <div className="quote">
        <FetchData />
      </div>
    </>
  );
}

export default App;
