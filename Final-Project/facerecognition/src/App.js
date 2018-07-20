import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import SignIn from './components/SignIn/SignIn.js'
import Register from './components/Register/Register.js'
import tachyons from 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'

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
      isSignedIn: false,
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

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
          this.setState({isSignedIn: true})
    }
    this.setState({ route: route });
  };

  render() {
     const { isSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={ particleOptions }/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          {
            route === 'home'
            ? <div>
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                <FaceRecognition imageUrl={imageUrl}/>
              </div>
            :
              (
                route === 'signin'
                ? <SignIn onRouteChange={this.onRouteChange}/>
                  : <Register onRouteChange={this.onRouteChange}/>
              )

          }

      </div>
         // {
         //
         // }
    );
  }
}

export default App;
