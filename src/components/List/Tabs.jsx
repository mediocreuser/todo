import React from 'react'

import { useDispatch } from 'react-redux'
import { reverse, setTab } from '../../redux/reducer'

import styled from 'styled-components'

const Tabs = ({ activeTab, setActiveTab }) => {
	const dispatch = useDispatch()

	const onChangeCategory = (event) => {
		setActiveTab(event.target.textContent)
		dispatch(setTab(event.target.textContent))
	}

	return (
		<TabsContainer>
			<button
				onClick={onChangeCategory}
				className={activeTab === 'All' ? 'active' : null}
			>
				All
			</button>
			<button
				onClick={onChangeCategory}
				className={activeTab === 'Done' ? 'active' : null}
			>
				Done
			</button>
			<button
				onClick={onChangeCategory}
				className={activeTab === 'Actual' ? 'active' : null}
			>
				Actual
			</button>
			<button className="reverse" onClick={() => dispatch(reverse())}>
				<span className="material-icons-round btn btn-reverse">import_export</span>
			</button>
		</TabsContainer>
	)
}

const TabsContainer = styled.div`
	position: relative;

	margin: 0 auto;
	padding-top: 20px;

	width: 100%;
	max-width: 250px;

	button {
		padding: 0 10px;

		font-family: inherit;
		font-size: inherit;
		color: inherit;

		background: none;
		border: none;
		cursor: pointer;

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
	}

	.reverse {
		position: absolute;
		bottom: -50%;
		transform: translateY(-50%);
		right: 0;
	}
`

export default Tabs
