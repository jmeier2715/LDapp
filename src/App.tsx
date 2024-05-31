import './App.css';
import { useFlags } from 'launchdarkly-react-client-sdk';
import React from 'react';
import dunkinDonuts from './dunkinDonuts.png'
import timHortons from './timHortons.png'

function App() {
  const { sampleFeature, buttonText, buttonArrange } = useFlags();
  return (
    <div className="App">
      <div className="App-header" style={{ backgroundColor: sampleFeature ? '#DC0F2D' : '#DA1884' }}>
        <p className="websiteBanner">
          <span>Welcome to <b>{sampleFeature ? "Tim Horton's" : 'Dunkin Donuts'}</b></span>
        </p>
        <div className="buttonContainer" style={{ flexDirection: buttonArrange ? 'row' : 'column' }}>
          <button>{buttonText ? 'Button 1' : 'Click me!'}</button>
          <button>{buttonText ? 'Button 2' : 'Check it out!'}</button>
          <button>{buttonText ? 'Button 3' : 'I Love Flags!'}</button>
        </div>
      </div>
        { sampleFeature ? (<img src={timHortons} className='coffeeLogo' alt='logo'/>) : 
        (<img src={dunkinDonuts} className='coffeeLogo' alt='logo'/>)
        }
    </div>
  );
}

export default App;

