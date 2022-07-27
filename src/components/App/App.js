import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductList from '../ProductList/ProductList';
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
              <Route path="/delivery-app/" element={<HomePage />} />
              <Route path="delivery-app/cart" element={<Basket />} />
            </Routes>
          </Router>
        </div>
      </main>

    </div>
  );
}

export default App;
