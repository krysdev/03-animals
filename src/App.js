import './App.css'; // don't assign any variable, just import

import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const renderedAnimals = animals.map((animal, index)=>{
    return <AnimalShow type={animal} key={index}/>
  })

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div className='app'>
      <button onClick={handleClick}>ADD</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;
