import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from "./components/About"
import Detail from "./components/Detail"
import Form from "./components/Form"
import Favorites from './components/Favorites'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  const onRandom = () => {

    const random = Math.floor(Math.random() * 827)

    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "mateo@gmail.com";
  const password = "pepe1234";

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access])

  return (
    <>

      <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch} onRandom={onRandom} />
        <Routes>
          <Route exact path="/home" element={<Cards
            characters={characters}
            onClose={onClose} />}>
          </Route>

          <Route exact path="/about" element={<About />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/" element={<Form login={login} />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App
