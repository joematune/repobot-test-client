import React from 'react'
import GetAllCategories from './components/GetAllCategories'
import styled from 'styled-components'
import index from './index.css'

// Styled H1 serving as a banner
const StyledH1 = styled.h1`
    margin: 4vmin;
    padding-bottom: 4vmin;
    border-bottom: 3px solid  rgba(255, 99, 71, 0.8);
`
// Styled div to center the app
const StyledBody = styled.div`
    display: grid;
    height: 98vh;
    justify-content: center;
`
// Styled div to provide a max-width for desktops
const StyledContainer = styled.div`
    max-width: 1080px;
    text-align: center;
`

export default function App() {
    return (
        <StyledBody>
            <StyledContainer>
                <StyledH1><span role="img" aria-label="Bearded Man Emoji">🧔</span> - Chuck Facts</StyledH1>

                {/* 
                    GetAllCategories queries for categories and creates a button
                    for each category
                */}
                <GetAllCategories />
            </StyledContainer>
        </StyledBody>
    )
}
