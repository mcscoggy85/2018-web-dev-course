import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center'>
      <div className='absolute'>
        <img className='ma3' alt='image-recognition' src={imageUrl} width='500px' height='auto'/>
      </div>
    </div>
  );
}

export default FaceRecognition;
