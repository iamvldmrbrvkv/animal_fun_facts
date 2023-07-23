import ocean from './images/ocean.jpeg';
import { animals } from './animals';
import './App.css';

function App() {
  const title = '';

  const showBackground = true;

  const background = (
  <img
    className='background'
    alt='ocean'
    src={ocean} />
);

const images = [];

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * animals[animalName].facts.length);
  const fact = animals[animalName].facts[randomIndex];
  document.getElementById('fact').innerHTML = fact;
}

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact} />
  );
}

  return (
    <div className="App">
      <h1>{title || 'Click an animal for a fun fact'}</h1>
      {showBackground && background}
      <div className='animals'>{images}</div>
      <p id='fact'></p>
    </div>
  );
}

export default App;
