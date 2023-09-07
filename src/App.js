import React from 'react';
import NavBar from './components/Navbar'
import './App.css';
import U1 from './components/U1'
import HomePage from './components/Home'
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
		<HashRouter>
			<NavBar/>
			<Routes>
				<Route path='/' element = {<HomePage/>}/>
				<Route path='/HomePage' element = {<HomePage/>}/>
				<Route path='/U1' element = {<U1/>}/>
			</Routes>
		</HashRouter>
   	</div>
  );
}

export default App;
