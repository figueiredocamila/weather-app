import React from 'react';
import Map from './components/atoms/Map';
import List from './components/organisms/List';
import cidades from './mock/cidades.json';

function App() {
  return (
    <div className="App">
      <Map />
      <List cities={cidades.list}></List>
    </div>
  );
}

export default App;
