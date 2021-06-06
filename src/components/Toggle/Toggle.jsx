import React from 'react'
import { setTheme } from '../../redux/reducer'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'

const Toggle = () => {
	const dispatch = useDispatch()
	const theme = useSelector(({ theme }) => theme)

	const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

	return <Button onClick={toggleTheme}>{theme}</Button>
}

const Button = styled.button`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);

	background: ${({ theme }) => theme.gradient};
	border-radius: 5px;
	cursor: pointer;
`

export default Toggle
