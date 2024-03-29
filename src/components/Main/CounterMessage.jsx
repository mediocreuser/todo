import React from 'react'
import styled from 'styled-components'

const CounterMessage = ({ count, className }) => {
	return (
		<div className={className}>
			{count === 0 ? (
				<div>You don't have tasks yet.</div>
			) : count === 1 ? (
				<div>
					You have <Count>{count}</Count> task
				</div>
			) : (
				<div>
					You have <Count>{count}</Count> tasks
				</div>
			)}
		</div>
	)
}

export default styled(CounterMessage)`
	position: relative;
	padding: 20px 0;

	&:after {
		content: '';

		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		height: 1px;
		width: 90%;

		background: ${({ theme }) => theme.border};
		background: linear-gradient(
			90deg,
			transparent 0%,
			${({ theme }) => theme.border} 50%,
			transparent 100%
		);

		@media (min-width: 576px) {
			width: 100%;
			max-width: 90%;
		}

		@media (min-width: 768px) {
			width: 100%;
			max-width: 535px;
		}
	}
`

const Count = styled.span`
	color: ${({ theme }) => theme.lightGreen};
`
