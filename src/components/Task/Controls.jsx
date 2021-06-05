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
	right: -35px;
	top: 50%;
	transform: translateY(-50%);

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
