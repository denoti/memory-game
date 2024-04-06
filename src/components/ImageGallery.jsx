import '../styles/imageGallery.css';
import Card from './Card';
import { useState } from 'react';

// console.log(photos);

const ImageGallery = ({
  photos,
  shufflePics,
  updateScores,
}) => {
  const [pictures, setPictures] = useState(photos);

  const handleClick = (event) => {
    let shuffledPictures = shufflePics(pictures);
    setPictures( shuffledPictures );
    updateScores(event.target.src)
  };

  return (
    <div className='images'>
      {pictures.map((photo, index) => (
        <Card key={index}>
          <img
            src={photo.key}
            alt={`Image ${index}`}
            onClick={handleClick}
          />
        </Card>
      ))}
    </div>
  );
};

export default ImageGallery;
