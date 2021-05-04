import React from 'react'
import Button from 'react-bootstrap/Button'

const SoundPadButtons = ({...props}) => {
  let sounds = props.sounds;
  let classNameCSS = props.className;
  let keysSoundMap = {a: 0, w: 1, s: 2, e: 3, d: 4, r: 5, f: 6, g: 7, y: 8, h: 9, u: 10, j: 11, k: 12, i: 13, l: 14};
  let drumsSoundMap = {p: 0, ' ': 1};
  let fxSoundMap = {z: 0, x: 1, c: 2};

  const handleClick = e => {
    let keyPressed = e.target.id;
    let map = '';
    (classNameCSS === 'Keys') ? map = keysSoundMap : (classNameCSS === 'Drums') ? map = drumsSoundMap : map = fxSoundMap;
    let index = map[keyPressed];
    document.getElementById(keyPressed).style.filter = 'brightness(50%)';
    setTimeout(() => {
      document.getElementById(keyPressed).style.filter = 'brightness(100%)';
    }, 400)
    console.log(keyPressed);
    sounds[index]['sound']();
       
    let activeNote = document.getElementById('active-note');
    activeNote.textContent = sounds[index]['name'];
  }

  return (
    <div className={classNameCSS}>
      {sounds.map(sound => {
        
        return classNameCSS === 'Keys' ?
          <button onClick={handleClick} key={sound['key']} id={sound['key']} className="key-button">
          </button> 
          : classNameCSS === 'Drums' ?
          <button onClick={handleClick} key={sound['key']} variant="light" className="kick-button" id={sound['key']}>
            {sound['name']}
          </button>
          :
          <Button onClick={handleClick} key={sound['key']} variant="outline-light" id={sound['key']} className="fx-button">
            {sound['name']}
          </Button>
        })
      }
    </div>
  );
}

export default SoundPadButtons;