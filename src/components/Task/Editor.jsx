import React, { useState } from 'react'

import styled from 'styled-components'
import { changeTask } from '../../redux/reducer'
import { useDispatch } from 'react-redux'

const Editor = ({ setEditMode, id, text }) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState(text)

	const [doneDisabled, setDoneDisabled] = useState(false)

	const onSubmitForm = (event) => {
		event.preventDefault()

		if (value.trim().length) {
			dispatch(changeTask(value, id))
			setEditMode(false)
		}
	}

	const onChangeInput = (event) => {
		const text = event.target.value

		setDoneDisabled(!text.trim().length)
		setValue(text)
	}

	const onKeyUpInput = (event) => setEditMode(event.code !== 'Escape')

	const onBlurInput = (event) => {
		const text = event.target.value

		if (text.length !== 0) {
			dispatch(changeTask(value, id))
			setValue(text)
		}

		setEditMode(false)
	}

	const onCancel = () => {
		setValue(value)
		setEditMode(false)
		setDoneDisabled(false)
	}

	return (
		<EditorContainer>
			<form onSubmit={onSubmitForm}>
				<input
					type="text"
					autoFocus
					value={value}
					onChange={onChangeInput}
					onKeyUp={onKeyUpInput}
					onBlur={onBlurInput}
				/>
				<button disabled={doneDisabled}>
					<span className="material-icons-round btn btn-done">done</span>
				</button>
			</form>
			<button onClick={onCancel} title="Esc">
				<span className="material-icons-round btn btn-close">close</span>
			</button>
		</EditorContainer>
	)
}

const EditorContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 20px;

	button:disabled .btn-done {
		color: ${({ theme }) => theme.taskGray};
	}

	form {
		display: flex;
		align-items: center;
		flex: 1;

		input {
			width: 100%;

			margin-left: 33px;

			font-family: inherit;
			font-size: inherit;
			color: inherit;

			background-color: transparent;
			border: none;

			&:focus {
				outline: none;
			}
		}
	}
`
export default Editor
