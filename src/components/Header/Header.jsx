import React from 'react'
import styled from 'styled-components'

const Header = () => {
	return (
		<header>
			<h1>Todo App</h1>
			<div>
				Write, review and manage your <Span>tasks</Span>.
			</div>
		</header>
	)
}

const Span = styled.span`
	color: ${({ theme }) => theme.lightGreen};
`

export default Header
