import React from 'react'

import styled from 'styled-components'

const Date = ({ date }) => {
	return <DateContainer className="date">{date}</DateContainer>
}

const DateContainer = styled.div`
	padding: 5px 0 0 35px;

	font-size: 12px;
	color: ${({ theme }) => theme.taskGray};
	text-align: left;
`

export default Date
