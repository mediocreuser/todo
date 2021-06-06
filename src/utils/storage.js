const storage = {
	getTasks: () => JSON.parse(sessionStorage.getItem('tasks')) || [],
	getCount: () => JSON.parse(sessionStorage.getItem('count')) || 0,
	getTheme: () => JSON.parse(sessionStorage.getItem('theme')) || 'dark',
	getTab: () => JSON.parse(sessionStorage.getItem('tab')) || 'All',
	setTheme: (theme) => sessionStorage.setItem('theme', JSON.stringify(theme)),
	setTab: (state) => sessionStorage.setItem('tab', JSON.stringify(state.tab)),
	setData: (state) => {
		sessionStorage.setItem('tasks', JSON.stringify(state.tasks))
		sessionStorage.setItem('count', JSON.stringify(state.count))
	},
}

export default storage
