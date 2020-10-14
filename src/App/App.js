import React from 'react';
import Address from './component/profile/Address.js';
import Fullname from './component/profile/FullName';
import ProfilPhoto from './component/profile/ProfilPhoto.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <Fullname/>
      <Address/>
    </div>
  );
}

export default App;
