import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainpage from './main';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Mainpage />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
