import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Product from './components/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import CardList from './components/CardList'
import Home from './components/Home'
import ProductPage from './components/ProductPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path="/products/:productId" element={<ProductPage/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cartlist' element={< CardList />} />


        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
