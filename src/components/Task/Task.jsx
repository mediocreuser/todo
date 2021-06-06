import React, { useState } from 'react'

import Status from './Status'
import Editor from './Editor'
import Controls from './Controls'
import Date from './Date'

import styled from 'styled-components'

const Task = React.memo(({ task }) => {
	const [editMode, setEditMode] = useState(false)

	return (
		<TaskContainer done={task.done} editMode={editMode}>
			<div className="wrapper">
				<div className="body">
					{!editMode && (
						<div className="content">
							<Status id={task.id} completed={task.done} />
							<div>{task.text}</div>
						</div>
					)}
					{editMode && <Editor setEditMode={setEditMode} id={task.id} text={task.text} />}
				</div>
				<Date date={task.date} />
			</div>
			<Controls setEditMode={setEditMode} id={task.id} />
		</TaskContainer>
	)
})

const TaskContainer = styled.li`
	position: relative;

	display: flex;
	margin-bottom: 30px;

	width: 90%;

	@media (min-width: 576px) {
		width: 100%;
		max-width: 90%;
	}

	@media (min-width: 768px) {
		width: 100%;
		max-width: 535px;
	}

	color: ${(props) => (props.done ? ({ theme }) => theme.translucentText : 'inherit')};

	button {
		background-color: transparent;
		border: none;
		padding: 0;
	}

	.wrapper {
		background-color: ${(props) =>
			props.editMode ? 'transparent' : ({ theme }) => theme.task};
		width: 100%;
		padding: 20px;
		border: 1px solid
			${(props) =>
				props.editMode ? ({ theme }) => theme.yellow : ({ theme }) => theme.border};
		border-radius: 10px;
		margin: 0 auto;
	}

	.body {
		display: flex;
		align-items: center;

		min-height: 20px;
	}

	.content {
		display: flex;
		align-items: center;
		text-align: left;
	}
`

export default Task
