import React from 'react';
import './App.css';
import Leaflet from 'leaflet';

import MapComp from "./component/map-component";

function GoogleSignin() {
  return <div class="g-signin2" data-onsuccess=""></div>
}

const App = () => (
    <div style={{ height: '100%', width: '100vw'}}>
    <MapComp></MapComp>
    </div>
);

export default App;
