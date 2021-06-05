import React from 'react'
import Toggle from '../Toggle/Toggle'

import { ReactComponent as GithubLogo } from '../../assets/images/github-mark.svg'
import styled from 'styled-components'

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<a href="https://github.com/mediocreuser/todo" target={'_blank'} rel="noreferrer">
					<GithubLogo />
				</a>
				<Toggle />
			</Wrapper>
		</Container>
	)
}

export default Navbar

const Container = styled.div`
	width: 100%;
	padding: 15px;
	background: ${({ theme }) => theme.nav};
`

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;

	a {
		display: inline-block;

		svg {
			fill: ${({ theme }) => theme.logo};
			width: 40px;
			height: 40px;
		}

		&:hover svg {
			opacity: 70%;
		}
	}

	button {
		float: right;
	}
`
