import React from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'

// Styled button, which has disabled style for visually
// representing a 'loading' element. Hover and focus
// styles for mouse and (mobile) touch responsiveness
const StyledButton = styled.button`
    background-color: rgba(255, 99, 71, 0.8);
    color: white;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
    font-size: 16px;
    font-size: clamp(1rem, 2.5vw, 2rem);
    text-transform: capitalize;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease 0s;
    &:hover {
        background-color: rgba(255, 99, 71, 1);
        transform: translateY(-3px);
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
    }
    &:focus {
        outline: none;
        background-color: rgba(255, 99, 71, 1);
    }
    &:disabled {
        background-color: rgba(255, 99, 71, 0.3);
    }
`

// Query which takes a variable/argument called 'category'
// and returns the joke via value field
const GET_A_JOKE = gql`
    query GetAJoke($category: String!) {
        joke(category: $category) {
            value
        }
    }
`

// Component receives a setJoke prop for returning state to
// its parent and a variables prop which gives each button
// a unique GET_A_JOKE query
export default function GetAJoke({ setJoke, variables }) {
    //  Hook for resolving the GET_A_JOKE query
    const {loading, refetch} = useQuery(GET_A_JOKE, {
        variables: variables
    });

    // Return button that refetches onClick to load new data.
    // refetch() returns a Promise and calls setJoke when complete
    return (
        <StyledButton disabled={loading} onClick={() => {
            refetch()
            .then(res => setJoke(res.data.joke.value))
            .catch(error => console.error(error))
        }}>
            {variables.category}
        </StyledButton>
    )
}
