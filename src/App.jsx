import Score from './components/Score';
import './App.css';
import Title from './components/Title';
import ImageGallery from './components/ImageGallery';
import {useState} from 'react';
import photos from './components/Photos'

function shufflePics(arr) {
  const shuffledArray = [...arr].sort((a, b) => 0.5 - Math.random());
  console.log(shuffledArray);
  return shuffledArray;
}

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <div>
        <div className='headerItems'>
          <Title />
          <Score score={score} bestScore={bestScore} />
        </div>
        <ImageGallery photos={photos} shufflePics={shufflePics} />
      </div>
    </>
  );
}

export default App;
