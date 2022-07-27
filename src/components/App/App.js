import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Basket from '../Basket/Basket';

function App() {
    return (
    <div className="App">
      <main className='main'>
        <div className='container'>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Basket />} />
            </Routes>
          </Router>
        </div>
      </main>

    </div>
  );
}

export default App;
