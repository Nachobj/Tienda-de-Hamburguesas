import React from 'react';
import CardWidget from './components/CardWidget';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

const App = () => {

  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemCount/>
    </div>
  );
}

export default App;