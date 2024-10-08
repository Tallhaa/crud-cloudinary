import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Register from './components/Register';
import Update from './components/Update';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/update/:id' element={<Update />} />

      </Routes>
    </>
  );
}

export default App;
