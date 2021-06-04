import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Input from '../Input/Input'
import List from '../List/List'

const Content = () => {
	const count = useSelector(({ count }) => count)
	const tasks = useSelector(({ tasks }) => tasks)

	const [inputValue, setInputValue] = useState('')

	const provideCurrentValue = (value) => setInputValue(value)

	return (
		<div>
			<Input count={count} provideCurrentValue={provideCurrentValue} />
			<div>{count ? `You have ${count} tasks` : "You don't have tasks yet."}</div>
			{!!count && <List tasks={tasks} value={inputValue} />}
		</div>
	)
}

export default Content
