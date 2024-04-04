import '../styles/imageGallery.css';
import photos from './Photos';
import Card from './Card';
console.log(photos);
const ImageGallery = () => {
  return (
    <div className='images'>
      {photos.map((photo, index) => (
        <Card key={index}>
          <img src={photo.key} alt={`Image ${index}`} />
        </Card>
      ))}
    </div>
  );
};

export default ImageGallery;
