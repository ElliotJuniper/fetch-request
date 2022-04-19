import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null)


  useEffect(() => {
  const fetchCharacters = async () => {
    try {
   
    const response = await fetch('https://www.breakingbadapi.com/api/characters')
    if (!respone.ok){
      throw new Error(response.statusText)
    }
    const data = await response.json();
    setCharacters(data);
  
} catch (err) {
  console.log(err.message)
  setError("Could not fetch error")
}}
fetchCharacters();
  }, []);



  return (
    <div className="App">
      {characters.map( (character) => (
        <>
        {error && <p>{error}</p>}
        <div>{character.name}</div>
        <img src={character.img} alt="breaking bad"/>
        </>
      ))}
    </div>
  );
}

export default App;
