import React from 'react'

import { useDispatch } from 'react-redux'
import { removeTask } from '../../redux/redux'

import styled from 'styled-components'

const Controls = ({ setEditMode, id, editMode }) => {
	const dispatch = useDispatch()

	return (
		<ControlsContainer editMode={editMode}>
			<button onClick={() => setEditMode(true)}>
				<span className="material-icons btn btn-edit">edit_note</span>
			</button>
			<button onClick={() => dispatch(removeTask({ id }))}>
				<span className="material-icons btn btn-delete">delete_outline</span>
			</button>
		</ControlsContainer>
	)
}

const ControlsContainer = styled.div`
	.btn-edit {
		color: ${({ editMode, theme }) => editMode && theme.yellow};
	}

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 100%;

	position: absolute;
	top: 50%;
	right: -9%;
	transform: translateY(-50%);

	@media (min-width: 768px) {
		right: -35px;
	}
`

export default Controls
