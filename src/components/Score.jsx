
import '../styles/score.css'

export default function Score (props) {
  return (
    <>
      <div className='scoreText'>
        <p>
          Score <span>{props.score}</span>
        </p>
        <p>
          Best Score <span>{props.bestScore}</span>
        </p>
      </div>
    </>
  );
}
