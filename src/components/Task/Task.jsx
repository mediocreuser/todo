import React, { useState } from 'react'

import Status from './Status'
import Editor from './Editor'
import Controls from './Controls'

import styled from 'styled-components'
import Date from './Date'

const Task = React.memo(({ task }) => {
	const [editMode, setEditMode] = useState(false)

	return (
		<TaskContainer done={task.done}>
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
	margin: 0 auto 30px;
	position: relative;
	color: ${(props) => (props.done ? ({ theme }) => theme.translucentText : 'inherit')};

	display: flex;
	width: 100%;
	max-width: 500px;

	button {
		background-color: transparent;
		border: none;
		padding: 0;
	}

	.wrapper {
		background-color: ${({ theme }) => theme.task};
		width: 100%;
		padding: 20px;
		border: 1px solid ${({ theme }) => theme.border};
		border-radius: 10px;
		margin: 0 auto;
	}

	.body {
		display: flex;
		align-items: center;

		min-height: 20px;

		.btn {
			font-size: 20px;
			user-select: none;

			transition: opacity 0.1s;
		}
	}

	.content {
		display: flex;
		align-items: center;
		text-align: left;
	}
`

export default Task
