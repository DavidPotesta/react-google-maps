import React, { Component } from 'react';
import { render } from 'react-dom';
import { withScriptjs } from "react-google-maps";
import Map from './Map';
import './style.css';

const App = () => {
  const MapLoader = withScriptjs(Map);

  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=000add000key000here"
      loadingElement={<div style={{ height: `100%` }} />}
    />
  );
};

render(<App />, document.getElementById('root'));
