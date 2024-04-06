import Score from './components/Score';
import './App.css';
import Title from './components/Title';
import ImageGallery from './components/ImageGallery';
import { useState } from 'react';
import photos from './components/Photos';

let scoreArray = [];

function shufflePics(arr) {
  const shuffledArray = [...arr].sort((a, b) => 0.5 - Math.random());
  return shuffledArray;
}

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateScores(data) {
    if (scoreArray.includes(data)) {
      scoreArray = [];
      setScore(0);
      if (score > bestScore) {
        setBestScore(score);
      }
    } else {
      scoreArray.push(data);
      setScore(score + 1);
    }
    console.log(scoreArray);
  }

  return (
    <>
      <div>
        <div className='headerItems'>
          <Title />
          <Score score={score} bestScore={bestScore} />
        </div>
        <ImageGallery
          photos={photos}
          shufflePics={shufflePics}
          // setScore={setScore}
          // setBestScore={setBestScore}
          // scoreArray={scoreArray}
          updateScores={updateScores}
        />
      </div>
    </>
  );
}

export default App;
