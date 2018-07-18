import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import SignIn from './components/SignIn/SignIn.js'

const app = new Clarifai.App({
 apiKey: 'af738a2550a04dbaac57dabdc60d2749'
});

const particleOptions = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 1184
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
  };

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input).
    then(response => this.calculateFaceLocation(response)).
    catch( err => console.log(err));
  };

  onRouteChange = () => {
    this.setState({ route: 'home' });
  };

  render() {
    return (
      <div className="App">
      <Particles className='particles' params={ particleOptions }/>
        <Navigation />
        { this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange}/>
          :
            <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        }

      </div>
         // {
         //
         // }
    );
  }
}

export default App;
