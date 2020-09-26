import React from 'react';
import Card from './components/molecules/Card'

function App() {
  const teste = () => console.log('camila')
  return (
    <div className="App">
      <Card city='Rio de Janeiro' high='40' low='32' closeCard={teste} />
    </div>
  );
}

export default App;
