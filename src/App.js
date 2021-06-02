import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Creator from './Components/Creator/Creator'
import List from './Components/List/List'

function App() {
	return (
		<div className="App">
			<Header />
			<Creator />
			<List />
		</div>
	)
}

export default App
