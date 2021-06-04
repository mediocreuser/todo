import React from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Content />
		</div>
	)
}

export default App
