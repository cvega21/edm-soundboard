import React from 'react'
import SoundPadButtons from './SoundPadButtons.js'

const SoundPad = ({...props}) => {
  const sounds = props.soundBank;
  let keys = [];
  let drums = [];
  let fx = [];


  for (const sound in sounds) {
    // console.log(sounds[sound]);
    if (sounds[sound].class === 'keys') {
      keys.push(sounds[sound]);
    } else if (sounds[sound].class === 'drums') {
      drums.push(sounds[sound]);
    } else {
      fx.push(sounds[sound]);
    }
  }

  // console.log(keys)
  // console.log(drums)
  // console.log(fx)
  return (
    <div className="sound-pad-container">
      <div className="sound-pad-keys-and-fx">
        <SoundPadButtons className="Keys" sounds={keys}/>
        <SoundPadButtons className="FX" sounds={fx}/>
      </div>
      <div className="sound-pad-drums">
        <SoundPadButtons className="Drums" sounds={drums}/>
      </div>
    </div>
  );
}

export default SoundPad;