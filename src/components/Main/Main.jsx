import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Input from '../Input/Input'
import List from '../List/List'

const Main = () => {
	const count = useSelector(({ count }) => count)
	const tasks = useSelector(({ tasks }) => tasks)

	const [inputValue, setInputValue] = useState('')

	const provideCurrentValue = (value) => setInputValue(value)

	return (
		<main>
			<Input count={count} provideCurrentValue={provideCurrentValue} />
			<div>{count ? `You have ${count} tasks` : "You don't have tasks yet."}</div>
			{!!count && <List tasks={tasks} value={inputValue} />}
		</main>
	)
}

export default Main
