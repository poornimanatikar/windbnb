import './App.css';
import React, { useState } from 'react';
import Header from './Header/Header';
import SearchComp from './Search/Search';
import Stays from './Stays/Stays';
function App() {

  const [filterOpen,setFilterOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(0);
  const handleSelection = (loc,guests) => {
       setLocation(loc);
       setGuests(guests);
  }
  return (
    <div className="App">
       <Header filterOpen={filterOpen} setFilterOpen={setFilterOpen} location={location} guests={`${guests} Guests`}/> 
       <Stays location={location} guests={guests}/> 
       {filterOpen && <SearchComp filterOpen={filterOpen} setFilterOpen={setFilterOpen} 
       handleSelection={handleSelection} />}
    </div>
  );
}

export default App;
