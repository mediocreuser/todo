import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './theme/global'
import { lightTheme, darkTheme } from './theme/theme'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useSelector } from 'react-redux'

function App() {
	const theme = useSelector(({ theme }) => theme)

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className="App">
				<Navbar />
				<div className="container">
					<Header />
					<Main />
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App
