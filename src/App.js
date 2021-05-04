import React, { useState } from 'react';
import SoundPad from './SoundPad.js';
import useSound from 'use-sound';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Badge from 'react-bootstrap/Badge';
import Logo from './Logo.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Drop_C from './for_project/Illenium/Drop_C.wav' 
import Drop_C_Sharp from './for_project/Illenium/Drop_C_Sharp.wav' 
import Drop_D from './for_project/Illenium/Drop_D.wav' 
import Drop_D_Sharp from './for_project/Illenium/Drop_D_Sharp.wav' 
import Drop_E from './for_project/Illenium/Drop_E.wav' 
import Drop_F from './for_project/Illenium/Drop_F.wav' 
import Drop_F_Sharp from './for_project/Illenium/Drop_F_Sharp.wav' 
import Drop_G from './for_project/Illenium/Drop_G.wav' 
import Drop_G_Sharp from './for_project/Illenium/Drop_G_Sharp.wav' 
import Drop_A from './for_project/Illenium/Drop_A.wav' 
import Drop_A_Sharp from './for_project/Illenium/Drop_A_Sharp.wav' 
import Drop_B from './for_project/Illenium/Drop_B.wav' 
import Drop_C_High from './for_project/Illenium/Drop_C_High.wav'
import Drop_C_Sharp_High from './for_project/Illenium/Drop_C_Sharp_High.wav'
import Drop_D_High from './for_project/Illenium/Drop_D_High.wav'

import kick from './for_project/Illenium/SD_Kick_Smash_C.wav'
import clap from './for_project/Illenium/SD_Clap_Cable.wav'

import Guitar from './for_project/Illenium/Guitar.wav'
import Vocals from './for_project/Illenium/Vocals.wav'
import Synth from './for_project/Illenium/Synth.wav'


const useKeyboardBindings = map => {
  React.useEffect(() => {
    const handlePress = ev => {
      const handler = map[ev.key];
      console.log(handler)

      
      if (typeof handler === 'function') {
        handler();
      } else if (typeof handler === 'object') {
        handler['sound']();
        let activeNote = document.getElementById('active-note');
        activeNote.textContent = handler['name'];
        document.getElementById(handler['key']).style.filter = 'brightness(50%)';
        setTimeout(() => {
          document.getElementById(handler['key']).style.filter = 'brightness(100%)';
        }, 400)
      }
    };

    window.addEventListener('keydown', handlePress);

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, [map]);
};

const App = () => {
  const [audioBank, setAudioBank] = useState('Illenium');
  const [play1] = useSound(Drop_C);
  const [play2] = useSound(Drop_C_Sharp);
  const [play3] = useSound(Drop_D);
  const [play4] = useSound(Drop_D_Sharp);
  const [play5] = useSound(Drop_E);
  const [play6] = useSound(Drop_F);
  const [play7] = useSound(Drop_F_Sharp);
  const [play8] = useSound(Drop_G);
  const [play9] = useSound(Drop_G_Sharp);
  const [play10] = useSound(Drop_A);
  const [play11] = useSound(Drop_A_Sharp);
  const [play12] = useSound(Drop_B);
  const [play13] = useSound(Drop_C_High);
  const [play14] = useSound(Drop_C_Sharp_High);
  const [play15] = useSound(Drop_D_High);


  const [play16] = useSound(kick);
  const [play17] = useSound(clap);

  const [play18] = useSound(Guitar);
  const [play19] = useSound(Vocals);
  const [play20] = useSound(Synth);
  
  const changeAudio = val => {
    setAudioBank(val);
  }

  let sounds = {
    a: {
      key: 'a',
      sound: () => play1(),
      name: 'Drop_C',
      class: 'keys'
    },
    w: {
      key: 'w',
      sound: () => play2(),
      name: 'Drop_C#',
      class: 'keys'
    },
    s: {
      key: 's',
      sound: () => play3(),
      name: 'Drop_D',
      class: 'keys'
    },
    e: {
      key: 'e',
      sound: () => play4(),
      name: 'Drop_D#',
      class: 'keys'
    },
    d: {
      key: 'd',
      sound: () => play5(),
      name: 'Drop_E',
      class: 'keys'
    },
    r: {
      key: 'r',
      sound: () => play6(),
      name: 'Drop_F',
      class: 'keys'
    },
    f: {
      key: 'f',
      sound: () => play7(),
      name: 'Drop_F_Sharp',
      class: 'keys'
    },
    g: {
      key: 'g',
      sound: () => play8(),
      name: 'Drop_G',
      class: 'keys'
    },
    y: {
      key: 'y',
      sound: () => play9(),
      name: 'Drop_G_Sharp',
      class: 'keys'
    },
    h: {
      key: 'h',
      sound: () => play10(),
      name: 'Drop_A',
      class: 'keys'
    },
    u: {
      key: 'u',
      sound: () => play11(),
      name: 'Drop_A_Sharp',
      class: 'keys'
    },
    j: {
      key: 'j',
      sound: () => play12(),
      name: 'Drop_B',
      class: 'keys'
    },
    k: {
      key: 'k',
      sound: () => play13(),
      name: 'Drop_C_High',
      class: 'keys'
    },
    i: {
      key: 'i',
      sound: () => play14(),
      name: 'Drop_C_Sharp_High',
      class: 'keys'
    },
    l: {
      key: 'l',
      sound: () => play15(),
      name: 'Drop_D_High',
      class: 'keys'
    },
    ' ': {
      key: ' ',
      sound: () => play16(),
      name: 'Kick',
      class: 'drums'
    },
    p: {
      key: 'p',
      sound: () => play17(),
      name: 'Clap',
      class: 'drums'
    },
    z: {
      key: 'z',
      sound: () => play18(),
      name: 'Guitar',
      class: 'fx'
    },
    x: {
      key: 'x',
      sound: () => play19(),
      name: 'Vocals',
      class: 'fx'
    },
    c: {
      key: 'c',
      sound: () => play20(),
      name: 'Synth',
      class: 'fx'
    }
  }

  useKeyboardBindings(sounds);
  <script src="https://kit.fontawesome.com/cd0cc07d13.js" crossorigin="anonymous"></script>

  return (
    <div className="app">
      <div className="box-container">
        <Logo mode={audioBank}/>
        <div className="active-sound-container">
          <Badge pill variant="light" className="active-sound">
            active note:
          </Badge>
          <p id="active-note">Click a key to begin...</p>
        </div>
        <SoundPad mode={audioBank} soundBank={sounds}/>
        <ToggleButtonGroup type="radio" value={audioBank} onChange={changeAudio} name='mode' className="toggle-mode">
          <ToggleButton value={'Illenium'} variant='dark'>Illenium</ToggleButton>
          <ToggleButton value={'Excision'} variant='dark'>Excision</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
}

export default App;
