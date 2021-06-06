import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/reducer'

import styled from 'styled-components'

const Input = ({ count, provideCurrentValue }) => {
	const dispatch = useDispatch()

	const [value, setValue] = useState('')
	const [disabled, setDisabled] = useState(true)

	const onInputChange = (event) => {
		const newValue = event.target.value

		provideCurrentValue(newValue)

		setDisabled(!newValue.trim().length)
		setValue(newValue)
	}

	const onAddTask = (event) => {
		event.preventDefault()

		dispatch(addTask(value))
		provideCurrentValue('')

		setValue('')
		setDisabled(true)
	}

	return (
		<InputContainer>
			<FormContainer onSubmit={onAddTask}>
				<input
					type="text"
					value={value}
					onChange={onInputChange}
					placeholder={count ? 'Add new task or filter' : 'Write your first task'}
				/>
				<button disabled={disabled}>
					<span className="material-icons-round">arrow_right_alt</span>
				</button>
			</FormContainer>
		</InputContainer>
	)
}

const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 30px;
`

const FormContainer = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 10px;
	background: none;

	width: 100%;
	max-width: 300px;

	input {
		width: 100%;

		padding: 10px 0 10px 14px;
		border: none;

		font-family: inherit;
		font-size: inherit;
		color: inherit;

		background: none;

		&:focus {
			outline: none;
		}
	}

	button {
		background: none;
		border: none;
		padding: 0 10px 0 0;

		&:disabled span {
			color: ${({ theme }) => theme.arrow};
		}

		span {
			color: ${({ theme }) => theme.lightGreen};
			transition: color 0.5s;
		}
	}
`

export default Input
