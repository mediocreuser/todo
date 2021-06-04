import React, { useState } from 'react'
import { reverse } from '../../redux/reducer'
import Task from '../Task/Task'
import { useDispatch } from 'react-redux'

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
			<ul>
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
			</ul>
		</div>
	)
}

export default List
