import { Page } from './Page/Homepage';
import { Routes, Route } from 'react-router-dom';
import { Location } from './Page/Location';
import './App.css';
import { Pokemons } from './Page/Pokemons';
import { Login } from './Page/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Page />} />
      <Route path='location'>
        <Route index element={<Location />} />
        <Route path=":id" element={<Pokemons />} />
      </Route>
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App;
