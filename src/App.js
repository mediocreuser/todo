import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './theme/global'
import { lightTheme, darkTheme } from './theme/theme'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function App() {
	const theme = useSelector(({ theme }) => theme)

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div>
				<Navbar />
				<Container>
					<Header />
					<Main />
				</Container>
			</div>
		</ThemeProvider>
	)
}

const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
`

export default App
