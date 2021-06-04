import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/reducer'

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
		<form onSubmit={onAddTask}>
			<input
				type="text"
				value={value}
				onChange={onInputChange}
				placeholder={count ? 'Add new task' : 'Write your first task'}
			/>
			<button disabled={disabled}>Add</button>
		</form>
	)
}

export default Input
