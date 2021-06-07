import React from 'react'
import { useSelector } from 'react-redux'

import classNames from 'classnames'
import styled from 'styled-components'

const Header = ({ className }) => {
	const count = useSelector(({ count }) => count)

	return (
		<div
			className={classNames(className, {
				haveTasks: !count,
				noTasks: count,
			})}
		>
			<Title>Todo App</Title>
			<div>
				Write, review and manage your <Span>tasks</Span>.
			</div>
		</div>
	)
}

export default styled(Header)`
	overflow: hidden;

	&.haveTasks {
		animation: scaleOut 0.5s ease-out forwards;
	}

	&.noTasks {
		animation: scaleIn 0.5s ease-out forwards;
	}
`

const Title = styled.h1`
	padding: 20px;

	font-family: 'Share Tech Mono', sans-serif;
	font-size: 50px;
`

const Span = styled.span`
	color: ${({ theme }) => theme.lightGreen};
`
