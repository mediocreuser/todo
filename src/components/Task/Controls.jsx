import React from 'react'

import { useDispatch } from 'react-redux'
import { removeTask } from '../../redux/reducer'

import styled from 'styled-components'

const Controls = ({ setEditMode, id }) => {
	const dispatch = useDispatch()

	return (
		<ControlsContainer>
			<button onClick={() => setEditMode(true)}>
				<span className="material-icons btn btn-edit">edit_note</span>
			</button>
			<button onClick={() => dispatch(removeTask(id))}>
				<span className="material-icons btn btn-delete">delete_outline</span>
			</button>
		</ControlsContainer>
	)
}

const ControlsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 100%;

	position: absolute;
	top: 50%;
	right: -9%;
	transform: translateY(-50%);

	@media (min-width: 576px) {
		right: -9%;
	}

	@media (min-width: 768px) {
		right: -35px;
	}

	.btn {
		color: ${({ theme }) => theme.taskGray};

		&:hover,
		&:active {
			&.btn-delete {
				color: ${({ theme }) => theme.lightRed};
			}

			&.btn-edit {
				color: ${({ theme }) => theme.yellow};
			}
		}
	}
`

export default Controls
