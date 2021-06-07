import React, { useState } from 'react'

import Status from './Status'
import Editor from './Editor'
import Controls from './Controls'
import Date from './Date'

import classNames from 'classnames'
import styled from 'styled-components'

const Task = React.memo(({ task, className }) => {
	const [editMode, setEditMode] = useState(false)

	return (
		<li className={classNames(className, { done: task.done })}>
			<Wrapper editMode={editMode}>
				<Body>
					{!editMode && (
						<Content>
							<Status id={task.id} completed={task.done} />
							<div>{task.text}</div>
						</Content>
					)}
					{editMode && <Editor setEditMode={setEditMode} id={task.id} text={task.text} />}
				</Body>
				<Date date={task.date} />
			</Wrapper>
			<Controls editMode={editMode} setEditMode={setEditMode} id={task.id} />
		</li>
	)
})

export default styled(Task)`
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

	&.done {
		color: ${({ theme }) => theme.translucentText};
	}
`

const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
	padding: 20px;

	border-radius: 10px;

	background-color: ${(props) =>
		props.editMode ? 'transparent' : ({ theme }) => theme.task};

	border: 1px solid
		${(props) =>
			props.editMode ? ({ theme }) => theme.yellow : ({ theme }) => theme.border};
`

const Body = styled.div`
	display: flex;
	align-items: center;

	min-height: 20px;
`

const Content = styled.div`
	display: flex;
	align-items: center;
	text-align: left;
`
