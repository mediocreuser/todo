import React from 'react'

import styled from 'styled-components'

const Date = ({ date }) => {
	return <DateContainer className="date">{date}</DateContainer>
}

const DateContainer = styled.div`
	padding-left: 35px;
	padding-top: 5px;
	text-align: left;
	font-size: 12px;
	color: ${({ theme }) => theme.taskGray};
`

export default Date
