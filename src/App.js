import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { NotFound } from './Components/NotFound';

import { Cart } from './Components/Cart';
import { AddProduct } from './Components/AddProduct';
import ProductVIew from './Components/ProductVIew';
// import { Summer } from './Components/Summer';
// import { Winter } from './Components/Winter';
// import { Accessories } from './Components/Accessories';
// import { Sale } from './Components/Sale';
import About from './Components/About';
import Disclaimer from './Components/Disclaimer';
import FAQS from './Components/FAQs';
import Terms from './Components/Terms';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path ="signup" element={<Signup/>}/>
        <Route path ="cart" element={<Cart/>}/>
        <Route path = 'add-product' element={<AddProduct/>}/>
        <Route path = 'product-view' element={<ProductVIew/>}/>
        {/* <Route path = '/summer' element={<Summer/>}/>
         <Route path = '/accessories' element={<Accessories/>}/>
        <Route path = '/sale' element={<Sale/>}/> */}
        <Route path = '/about' element={<About/>}/>
        <Route path = '/disclaimer' element={<Disclaimer/>}/>
        <Route path = '/faqs' element={<FAQS/>}/>
        <Route path = '/terms' element={<Terms/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  
  
    </div>
  );
}

export default App;
