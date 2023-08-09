import './App.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} > 
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
