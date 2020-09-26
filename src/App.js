import React from 'react';
import Button from './components/atoms/Button'

function App() {
  const teste = () => console.log('camila')
  return (
    <div className="App">
      <Button type="search" onclick={teste} />
      <Button type="city" text="Cidade" onclick={teste} />
      <Button type="icon" onclick={teste} />

    </div>
  );
}

export default App;
