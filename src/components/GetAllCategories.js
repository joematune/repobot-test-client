import React, { useState } from 'react'
import { useQuery, gql} from '@apollo/client'
import GetAJoke from './GetAJoke'
import styled from 'styled-components'

// Styled horizontal bar to separate the categories from the
// joke card
const StyledHr = styled.hr`
    margin: 4vmin;
    border: none;
    border-top: 3px solid  rgba(255, 99, 71, 0.8);
`
// Container for centering the joke card
const StyledContainer = styled.div`
    display: grid;
    height: 100%;
    padding: 2vmin 0;
    place-content: center;
`
// Stylized card for the joke text
const StyledCard = styled.div`
    background-color: white;
    box-sizing: border-box;
    display: grid;
    place-content: center;
    max-width: 600px;
    padding: 2rem;
    margin: 0 1rem;
    min-height: 4rem;
    font-size: 16px;
    font-size: clamp(1rem, 2.5vmax, 2rem);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0 6px 6px rgba(0,0,0,0.23);
`

// Query to get all joke categories
// The response is an array of strings
const GET_ALL_CATEGORIES = gql`
    query {
      categories
    }
`
// Component containing the dymanic data in the app:
    // The categories & The jokes
export default function GetAllCategories() {
    // Responsible for holding the currently displayed joke
    const [joke, setJoke] = useState("Select a category from above.");
    // Hook for resolving the GET_ALL_CATEGORIES query
    const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

    // Render 'Loading Categories...' if request is loading
    if (loading) return <p>Loading Categories...</p>;
    // Render 'APIs error - Chuck doesn't' if request returns an error
    if (error) return <p>APIs error - Chuck doesn't</p>;

    return (
        <div>
        {/* 
            For each category retuned from GET_ALL_CATEGORIES,
            create a <GetAJoke /> component. The setState hook is
            passed down as a prop to return the current joke String
        */}
            {data.categories.map((category, index) => (
                <GetAJoke key={index} setJoke={setJoke} variables={{category: category}} />
            ))}

            <StyledHr />

            <StyledContainer>
                <StyledCard>{joke}</StyledCard>
            </StyledContainer>
        </div>
    )
}
