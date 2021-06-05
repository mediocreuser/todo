import React, { useState } from 'react'

import styled from 'styled-components'
import { changeTask } from '../../redux/reducer'
import { useDispatch } from 'react-redux'

const Editor = ({ setEditMode, id, text }) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState(text)

	const [doneDisabled, setDoneDisabled] = useState(false)

	const onCancel = () => {
		setValue(value)
		setEditMode(false)
		setDoneDisabled(false)
	}

	const onSubmitForm = (event) => {
		event.preventDefault()

		if (value.trim().length) {
			dispatch(changeTask(value, id))
			setEditMode(false)
		}
	}

	const onChangeInput = (event) => {
		const text = event.target.value

		if (text.trim().length === 0) {
			setDoneDisabled(true)
			setValue('')
		} else {
			setDoneDisabled(false)
			setValue(text)
		}
	}

	const onKeyUpInput = (event) => setEditMode(event.code !== 'Escape')

	return (
		<EditorContainer>
			<form onSubmit={onSubmitForm}>
				<input
					type="text"
					autoFocus
					value={value}
					onChange={onChangeInput}
					onKeyUp={onKeyUpInput}
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

	.btn-done {
		color: ${({ theme }) => theme.green};

		&:hover {
			color: ${({ theme }) => theme.lightGreen};
		}
	}

	.btn-close {
		color: ${({ theme }) => theme.red};

		&:hover {
			color: ${({ theme }) => theme.lightRed};
		}
	}
`
export default Editor
