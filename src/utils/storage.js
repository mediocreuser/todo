const storage = {
	getTasks: () => JSON.parse(sessionStorage.getItem('tasks')) || [],
	getCount: () => JSON.parse(sessionStorage.getItem('count')) || 0,
	getTheme: () => JSON.parse(sessionStorage.getItem('theme')) || 'dark',
	getTab: () => JSON.parse(sessionStorage.getItem('tab')) || 'All',

	setTheme: (theme) => sessionStorage.setItem('theme', JSON.stringify(theme)),
	setTab: (tab) => sessionStorage.setItem('tab', JSON.stringify(tab)),
	setTasks: (tasks) => sessionStorage.setItem('tasks', JSON.stringify(tasks)),
	setCount: (state) => sessionStorage.setItem('count', JSON.stringify(state)),
}

export default storage
