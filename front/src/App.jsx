import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/nav_bar/Navbar';
import { useState } from 'react';
import axios from 'axios';

const API_KEY = 'pi-hx-aquintero'

function App() {

   const [characters, setCharacters] = useState([])

   // const example = {
   //    id: 1,
   //    name: 'Rick Sanchez',
   //    status: 'Alive',
   //    species: 'Human',
   //    gender: 'Male',
   //    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };

   // const onSearch = (char) => {
   //    setCharacters([...characters, char])
   // }

   function onSearch(id) {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   const onClose = (id) => {
      const filteredList = characters.filter((character)=>character.id !== parseInt(id))
      setCharacters(filteredList)
   }

   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
