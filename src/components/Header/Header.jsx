import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Header = () => {
	const count = useSelector(({ count }) => count)

	return (
		<HeaderContainer count={count}>
			<Title>Todo App</Title>
			<div>
				Write, review and manage your <span>tasks</span>.
			</div>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.header`
	overflow: hidden;

	${({ count }) =>
		!count
			? `animation: scaleOut 0.5s ease-out forwards;`
			: `animation: scaleIn 0.5s ease-out forwards;`}

	span {
		color: ${({ theme }) => theme.lightGreen};
	}
`

const Title = styled.h1`
	padding: 20px;

	font-family: 'Share Tech Mono', sans-serif;
	font-size: 50px;
`

export default Header
