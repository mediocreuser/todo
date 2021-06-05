import React, { useState } from 'react'

import { reverse } from '../../redux/reducer'
import { useDispatch } from 'react-redux'

import Task from '../Task/Task'
import styled from 'styled-components'

const List = ({ tasks, value }) => {
	const dispatch = useDispatch()
	const [activeTab, setActiveTab] = useState('')

	const onChangeCategory = (event) => setActiveTab(event.target.textContent)

	return (
		<div>
			<div>
				<button onClick={onChangeCategory}>All</button>
				<button onClick={onChangeCategory}>Done</button>
				<button onClick={onChangeCategory}>Actual</button>
				{' | '}
				<button onClick={() => dispatch(reverse())}>reverse</button>
			</div>
			<ListContainer>
				{tasks
					.filter((task) => task.text.toUpperCase().includes(value.toUpperCase()))
					.filter((task) => {
						switch (activeTab) {
							case 'Done':
								return task.done === true
							case 'Actual':
								return task.done === false
							default:
								return task
						}
					})
					.map((task) => (
						<Task key={task.id} task={task} />
					))}
			</ListContainer>
		</div>
	)
}

const ListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 768px) {
		align-items: center;
	}
`

export default List
