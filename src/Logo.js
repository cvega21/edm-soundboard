import React from 'react'
import excision_logo from './for_project/excision_logo.png';
import illenium_logo from './for_project/illenium_logo.png';


const Logo = ({mode}) => {
  return (
    <div className="logo-container">
      {mode === 'Illenium' ? (
        <div>
          <img src={illenium_logo} alt='' className="illenium-logo"/>
        </div>
      ) : (
        <div className="excision-logo-container">
          <img src={excision_logo} alt='' className="excision-logo"/>
        </div>
      )}
    </div>
  );
}

export default Logo;