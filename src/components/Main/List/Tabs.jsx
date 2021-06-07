import React from 'react'
import { useDispatch } from 'react-redux'
import { reverse, setTab } from '../../../redux/reducer'

import styled from 'styled-components'

const Tabs = ({ activeTab, setActiveTab, className }) => {
	const dispatch = useDispatch()

	const onChangeCategory = (event) => {
		setActiveTab(event.target.textContent)
		dispatch(setTab(event.target.textContent))
	}

	return (
		<div className={className}>
			<Button
				onClick={onChangeCategory}
				className={activeTab === 'All' ? 'active' : null}
			>
				All
			</Button>
			<Button
				onClick={onChangeCategory}
				className={activeTab === 'Done' ? 'active' : null}
			>
				Done
			</Button>
			<Button
				onClick={onChangeCategory}
				className={activeTab === 'Actual' ? 'active' : null}
			>
				Actual
			</Button>
			<Reverse onClick={() => dispatch(reverse())}>
				<span className="material-icons-round btn btn-reverse">import_export</span>
			</Reverse>
		</div>
	)
}

export default styled(Tabs)`
	position: relative;

	margin: 0 auto;
	padding-top: 20px;

	width: 100%;
	max-width: 250px;
`

const Button = styled.button`
	padding: 0 10px;

	&:active > span {
		color: ${({ theme }) => theme.lightGreen};
	}

	@media (min-width: 768px) {
		&:hover,
		&:hover > span {
			color: ${({ theme }) => theme.transparentLightGreen};
		}

		&:active,
		&:active > span {
			color: ${({ theme }) => theme.lightGreen};
		}
	}

	&.active,
	&.active:hover {
		color: ${({ theme }) => theme.lightGreen};
	}
`

const Reverse = styled(Button)`
	position: absolute;
	bottom: -50%;
	transform: translateY(-50%);
	right: 0;
`
