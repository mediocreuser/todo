import React from 'react'
import Toggle from '../Toggle/Toggle'

import { ReactComponent as GithubLogo } from '../../assets/images/github-mark.svg'
import styled from 'styled-components'

const Navbar = ({ className }) => {
	return (
		<div className={className}>
			<Wrapper>
				<Link
					href="https://github.com/mediocreuser/todo"
					target={'_blank'}
					rel="noreferrer"
				>
					<GithubLogo />
				</Link>
				<Toggle />
			</Wrapper>
		</div>
	)
}

export default styled(Navbar)`
	width: 100%;
	padding: 15px;
	background: ${({ theme }) => theme.nav};
`

const Wrapper = styled.div`
	position: relative;

	margin: 0 auto;
	max-width: 800px;
`

const Link = styled.a`
	display: inline-block;

	svg {
		fill: ${({ theme }) => theme.logo};
		width: 40px;
		height: 40px;
	}

	&:hover svg {
		opacity: 70%;
	}
`
