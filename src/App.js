import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AllProducts from './component/AllProducts/AllProducts';
import Menubar from './component/Menubar/Menubar';
import  AOS  from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount (count + 1);
  };
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
