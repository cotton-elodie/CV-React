import { Desktop } from '../../Pages/Desktop';
import Mobile from '../../Pages/Mobile';
import React from 'react';

import './App.css';



function App() {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  return (
    <div className="App">
      <Desktop/>
      <Mobile/>
    </div>
  );
}

export default App;
