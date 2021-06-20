import { createSlice, configureStore } from '@reduxjs/toolkit'
import storage from '../utils/storage'
import { v1 as uuid } from 'uuid'

const todoSlice = createSlice({
	name: 'task',
	initialState: storage.getTasks(), // {}[]
	reducers: {
		create: {
			reducer: (state, { payload }) => {
				state.push(payload)
				storage.setTasks(state)
				return state
			},
			prepare: (text) => ({
				payload: {
					text: text.trim(),
					date: `added ${new Date().toLocaleString('default', {
						month: 'short',
						day: 'numeric',
						year: 'numeric',
					})}`,
					done: false,
					modified: false,
					id: uuid(),
				},
			}),
		},

		change: (state, { payload }) => {
			const { id, value } = payload
			const task = state.find((task) => task.id === id)

			if (!task) return
			if (task.text === value.trim()) return

			task.text = value
			task.date = `modified ${new Date().toLocaleString('default', {
				month: 'short',
				day: 'numeric',
				year: 'numeric',
			})}`
			task.modified = true

			storage.setTasks(state)
		},

		changeStatus: (state, { payload }) => {
			const { id } = payload
			const task = state.find((task) => task.id === id)

			if (!task) return

			task.done = !task.done
			storage.setTasks(state)
		},

		remove: (state, { payload }) => {
			const { id } = payload
			const index = state.findIndex((task) => task.id === id)
			if (index !== -1) {
				state.splice(index, 1)
				storage.setTasks(state)
			}
		},

		reverse: (state) => {
			state.reverse()
		},
	},
})

const countSlice = createSlice({
	name: 'count',
	initialState: storage.getCount(), // number
	extraReducers: {
		[todoSlice.actions.create]: (state) => {
			state = state + 1
			storage.setCount(state)
			return state
		},
		[todoSlice.actions.remove]: (state) => {
			state = state - 1
			storage.setCount(state)
			return state
		},
	},
})

const themeSlice = createSlice({
	name: 'theme',
	initialState: storage.getTheme(), // string
	reducers: {
		toggle: (state, { payload }) => {
			state = payload
			storage.setTheme(payload)
			return state
		},
	},
})

const tabSlice = createSlice({
	name: 'tub',
	initialState: storage.getTab(), // string
	reducers: {
		change: (state, { payload }) => {
			state = payload
			storage.setTab(state)
			return state
		},
	},
})

export const {
	create: addTask,
	change: changeTask,
	changeStatus: changeTaskStatus,
	remove: removeTask,
	reverse,
} = todoSlice.actions

export const { toggle } = themeSlice.actions
export const { change: setTab } = tabSlice.actions

export default configureStore({
	reducer: {
		tasks: todoSlice.reducer,
		count: countSlice.reducer,
		tab: tabSlice.reducer,
		theme: themeSlice.reducer,
	},
})
