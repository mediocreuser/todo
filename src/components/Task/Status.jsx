import React from 'react'

import { useDispatch } from 'react-redux'
import { changeTaskStatus } from '../../redux/reducer'

import styled from 'styled-components'

const Status = ({ id, completed }) => {
	const dispatch = useDispatch()

	return (
		<StatusContainer>
			<label className={completed ? 'active' : null}>
				<span className="material-icons-round btn btn-done">done</span>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => dispatch(changeTaskStatus(id))}
				/>
			</label>
		</StatusContainer>
	)
}

const StatusContainer = styled.div`
	padding-right: 15px;

	label {
		display: block;
		position: relative;

		width: 20px;
		height: 20px;

		border: 3px solid ${({ theme }) => theme.green};
		border-radius: 7px;
		cursor: pointer;
		background-color: ${({ theme }) => theme.green};

		transition: border-color 0.1s, background-color 0.1s;

		&:hover {
			border-color: ${({ theme }) => theme.lightGreen};
			background-color: transparent;
		}

		&.active {
			border-color: ${({ theme }) => theme.lightGreen};
			background-color: ${({ theme }) => theme.lightGreen};

			.btn {
				opacity: 1;
			}
		}

		.btn {
			font-size: 20px;
			opacity: 0;
			color: white;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}

		input {
			display: none;
		}
	}
`

export default Status
