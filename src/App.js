import './App.css';
import Navbar from './components/Navbar';

import { Switch, Route } from 'react-router-dom';
import HomeView from './pages/HomeView';
import CartView from './pages/CartView';
import ProductView from './pages/ProductView';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className='container'>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route path='/products/:productId' component={ProductView} />
            <Route path='/cart' component={CartView} />
            <Route path='/' component={HomeView} />
          </Switch>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
