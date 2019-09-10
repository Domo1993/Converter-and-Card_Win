import React from 'react';
import './App.css';

import { BrowserRouter,Route } from 'react-router-dom';

// Importing my components
import MyDropdown from './Components/Dropdown';
import CurrencyConverter from './Components/CurrencyConverter';
import CardGame from './Components/CardGame';

// This App function puts the different components on specific routes/URLs
function App() {
  return (
    <div className="App">
    	<BrowserRouter>
    		{/*My dropdown menu component appears on all the URLs/routes and is my only home component*/}
      		<Route path="/" component={MyDropdown}/>
      		<Route path="/currencyConverter" component={CurrencyConverter}/>
      		<Route path="/cardGame" component={CardGame}/>
      	</BrowserRouter>
    </div>
  );
}

export default App;
