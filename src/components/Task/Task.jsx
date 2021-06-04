import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTask, changeTaskStatus, removeTask } from '../../redux/reducer'

const Task = React.memo(({ task }) => {
	const dispatch = useDispatch()

	const [editMode, setEditMode] = useState(false)

	const [disabledChange, setDisabledChange] = useState(false)
	const [doneDisabled, setDoneDisabled] = useState(false)

	const [value, setValue] = useState(task.text)

	const onChangeInput = (event) => {
		const text = event.target.value
		setValue(text)

		if (text.trim().length === 0) {
			setDoneDisabled(true)
		} else {
			setDoneDisabled(false)
		}
	}

	const onSubmitForm = (event) => {
		event.preventDefault()

		if (value.trim().length !== 0) {
			dispatch(changeTask(value, task.id))
			setEditMode(false)
			setDisabledChange(false)
		}
	}

	const onCancel = () => {
		setValue(task.text)
		setEditMode(false)
		setDisabledChange(false)
		setDoneDisabled(false)
	}

	return (
		<li
			style={{
				border: '1px solid black',
				margin: '20px auto',
				padding: 15,
				width: 300,
			}}
		>
			{editMode && (
				<>
					<form onSubmit={onSubmitForm}>
						<input type="text" autoFocus value={value} onChange={onChangeInput} />
						<button disabled={doneDisabled}>done</button>
					</form>
					<button onClick={onCancel}>cancel</button>
				</>
			)}
			{!editMode && <div>{task.text}</div>}
			<div>{task.date}</div>
			<div>
				<button
					disabled={disabledChange}
					onClick={() => {
						setEditMode(true)
						setDisabledChange(true)
					}}
				>
					Change
				</button>
				<button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
				<input
					type="checkbox"
					checked={task.done}
					onChange={() => dispatch(changeTaskStatus(task.id))}
				/>
			</div>
		</li>
	)
})

export default Task
