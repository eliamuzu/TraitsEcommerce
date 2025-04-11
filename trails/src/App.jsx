import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Layout/Nav"
import Footer from "./components/Layout/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"


function App() {
 

  return (
   
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path='/pages/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/pages/cart' element={<Cart/>}/>
          <Route path='/pages/Login' element={<Login/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>

  )  
}

export default App
