import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Exchange from './Components/Exchange';
import Coins from './Components/Coins';
import Footer from './Components/Footer';
import SingleCoin from './Components/SingleCoin';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/exchange' element = {<Exchange />} />
          <Route path='/coins' element = {<Coins />} />
          <Route path='/coins/:id' element = {<SingleCoin />} />
        
        </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
