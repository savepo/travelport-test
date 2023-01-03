import React from 'react'
import { CardContainer, NamesContainer, InformationContainer, EmailContainer, Email, FirstName, LastName, Image } from './styles'
import { data } from '../../AppMockItems/peopleInformation'

// Navitem Component
const PersonCard = ({firstName = 'John', lastName = 'Doe', email = 'jhondoe@example.com', img}) => {
    // Returns the component
    return (
        <CardContainer>
            <Image src={img} alt='Image not found' />
            <InformationContainer>
                <NamesContainer>
                    <FirstName>{firstName}</FirstName>
                    <LastName>{lastName}</LastName>
                </NamesContainer>
                <EmailContainer>
                    <Email>{email}</Email>
                </EmailContainer>
            </InformationContainer>
        </CardContainer>
    )
  }
export default PersonCard
