import React from 'react'
import styled from 'styled-components'
import { ZellerCustomers } from '../API'
import { defaultFont, Heading3, Paragraph } from '../utils'

const Container = styled.div`
  margin: 25px 0;
  display: flex;
  gap: 20px;
  align-items: center;
`

const Avatar = styled.div`
  font-family: ${defaultFont};
  background-color: #ebf2fa;
  color: #619edd;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Customer = ({ name, role }: ZellerCustomers) => {
  const firstLetterOfName = name[0]

  return (
    <Container>
      <Avatar>{firstLetterOfName.toUpperCase()}</Avatar>
      <Details>
        <Heading3>{name}</Heading3>
        <Paragraph>{role}</Paragraph>
      </Details>
    </Container>
  )
}

export default Customer