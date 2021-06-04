const storage = {
	getTasks: () => JSON.parse(sessionStorage.getItem('tasks')) || [],
	getCount: () => JSON.parse(sessionStorage.getItem('count')) || 0,
	setData: (state) => {
		sessionStorage.setItem('tasks', JSON.stringify(state.tasks))
		sessionStorage.setItem('count', JSON.stringify(state.count))
	},
}

export default storage
