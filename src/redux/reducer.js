import storage from '../utils/storage'

// Actions
const ADD_TASK = 'todo-app/ADD_TASK'
const CHANGE_TASK_STATUS = 'todo-app/CHANGE_TASK_STATUS'
const CHANGE_TASK = 'todo-app/CHANGE_TASK'
const REMOVE_TASK = 'todo-app/REMOVE_TASK'
const SET_COUNT = 'todo-app/SET_COUNT'
const REVERSE = 'todo-app/REVERSE'

const initialState = {
	tasks: storage.getTasks(),
	count: storage.getCount(),
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.task],
			}

		case CHANGE_TASK:
			return {
				...state,
				tasks: [
					...state.tasks.map((task) => {
						if (task.id === action.id)
							return {
								...task,
								text: action.text,
								date: `modified ${new Date().toLocaleString('default', {
									month: 'short',
									day: 'numeric',
									year: 'numeric',
								})}`,
								modified: true,
							}
						return task
					}),
				],
			}

		case CHANGE_TASK_STATUS:
			return {
				...state,
				tasks: [
					...state.tasks.map((task) => {
						if (task.id === action.id) return { ...task, done: !task.done }
						return task
					}),
				],
			}

		case REMOVE_TASK:
			return {
				...state,
				tasks: [...state.tasks.filter((task) => task.id !== action.id)],
			}

		case SET_COUNT:
			return {
				...state,
				count: state.tasks.length,
			}

		case REVERSE:
			return {
				...state,
				tasks: [...state.tasks.reverse()],
			}

		default:
			return state
	}
}

// Action Creators
const addTaskAC = (task) => ({
	type: ADD_TASK,
	task,
})

const removeTaskAC = (id) => ({
	type: REMOVE_TASK,
	id,
})

const setCountAC = () => ({ type: SET_COUNT })

const changeTaskStatusAC = (id) => ({ type: CHANGE_TASK_STATUS, id })

const changeTaskAC = (text, id) => ({ type: CHANGE_TASK, text, id })

export const reverse = () => ({ type: REVERSE })

// Thunks
export const addTask = (text) => (dispatch, getState) => {
	const date = new Date()
	const task = {
		text: text.trim(),
		date: `added ${date.toLocaleString('default', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		})}`,
		done: false,
		modified: false,
		id: date.getTime(),
	}

	dispatch(addTaskAC(task))
	dispatch(setCountAC())

	storage.setData(getState())
}

export const changeTask = (text, id) => (dispatch, getState) => {
	const currentTask = getState().tasks.find((task) => task.id === id)
	if (currentTask.text === text.trim()) return

	dispatch(changeTaskAC(text, id))
	storage.setData(getState())
}

export const changeTaskStatus = (id) => (dispatch, getState) => {
	dispatch(changeTaskStatusAC(id))
	storage.setData(getState())
}

export const removeTask = (id) => (dispatch, getState) => {
	dispatch(removeTaskAC(id))
	dispatch(setCountAC())

	storage.setData(getState())
}

export default reducer
