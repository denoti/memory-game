import Score from './components/Score';
import './App.css';
import Title from './components/Title';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <>
      <div>
        <div className='headerItems'>
          <Title />
          <Score />
        </div>
        <ImageGallery />
      </div>
    </>
  );
}

export default App;
