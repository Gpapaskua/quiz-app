import React from "react"
import loading from './Spinner.svg'
import styled from 'styled-components'
const Preloader = () => {
    return (
        <Loading>
            <img src={loading} alt={"Loading..."} />
        </Loading>
    )
}

const Loading = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default Preloader;