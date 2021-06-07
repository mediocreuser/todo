import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Tabs from './Tabs'
import Task from '../Task/Task'

import styled from 'styled-components'

const List = ({ tasks, value }) => {
	const tab = useSelector(({ tab }) => tab)

	const [activeTab, setActiveTab] = useState(tab)

	return (
		<div>
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
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

	padding-top: 30px;

	@media (min-width: 768px) {
		align-items: center;
	}
`

export default List
