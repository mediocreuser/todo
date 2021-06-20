import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../redux/redux'

import withStyles from '@material-ui/core/styles/withStyles'
import Switch from '@material-ui/core/Switch'

import styled from 'styled-components'

const Toggle = ({ className }) => {
	const dispatch = useDispatch()
	const theme = useSelector(({ theme }) => theme)

	const [checked, setChecked] = React.useState(theme === 'dark')

	const handleChange = (event) => {
		setChecked(event.target.checked)
		dispatch(toggle(checked ? 'light' : 'dark'))
	}

	return (
		<div className={className}>
			<span className="material-icons-round">light_mode</span>

			<GreenSwitch
				checked={checked}
				onChange={handleChange}
				inputProps={{ 'aria-label': 'primary checkbox' }}
			/>
			<span className="material-icons-round">nightlight_round</span>
		</div>
	)
}

export default styled(Toggle)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);

	display: flex;
	align-items: center;
	color: #cdd9e5;

	span {
		font-size: 22px;
	}
`

const GreenSwitch = withStyles({
	switchBase: {
		color: '#cdd9e5',
		'&$checked': {
			color: '#3fb950',
			'&:hover': {
				backgroundColor: 'rgba(63,185,80,0.05)',
			},
		},
		'&$checked + $track': {
			backgroundColor: '#3fb950',
		},
	},
	checked: {},
	track: {},
})(Switch)
