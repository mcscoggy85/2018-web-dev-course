import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
      {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <div className='center form'>
        <div className='center pa4 br3 shadow-5 form'>
          <input className='f4 pa2 w-70 center br2' type='text' onChange={onInputChange}/>
          <button className='w-40 grow f4 link ph3 pv2 dib white bg-light-purple br2' onClick={onButtonSubmit} >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
