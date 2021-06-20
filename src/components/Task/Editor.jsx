import React, { useState } from 'react'

import styled from 'styled-components'
import { changeTask } from '../../redux/redux'
import { useDispatch } from 'react-redux'

const Editor = ({ setEditMode, id, text, className }) => {
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
			dispatch(changeTask({ value, id }))
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
		<div className={className}>
			<Form onSubmit={onSubmitForm}>
				<Input
					value={value}
					onChange={onChangeInput}
					onKeyUp={onKeyUpInput}
					onBlur={onBlurInput}
				/>
				<button disabled={doneDisabled}>
					<span className="material-icons-round btn btn-done">done</span>
				</button>
			</Form>
			<button onClick={onCancel} title="Esc">
				<span className="material-icons-round btn btn-close">close</span>
			</button>
		</div>
	)
}

export default styled(Editor)`
	display: flex;
	align-items: center;
	width: 100%;
	height: 20px;

	button:disabled .btn-done {
		color: ${({ theme }) => theme.taskGray};
	}
`

const Form = styled.form`
	display: flex;
	align-items: center;
	flex: 1;
`

const Input = styled.input.attrs({ type: 'text', autoFocus: true })`
	width: 100%;
	margin-left: 33px;
`
