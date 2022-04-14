import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
    background: var(--purple);
    height: 50vh;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ImgContainer = styled.div`
    border: 1px solid black;
    width: 20vw;
    height: 56vh;
    position: absolute;
    margin-right: 70%;
    margin-top: 5%;

    img {
        width: 100%;
        height: 100%;
    }
`

export const SinopseContainer  = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
    width: 40%;
    height: 95%;
    margin-left: -5%;

    h3, h4 {
        color: var(--white);
    }

    p {
        color: var(--gray-light);
    }
`

export const Sinopse = styled.div`
    border: 1px solid green;
    width: 100%;
    height: 14vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const CastContainer = styled.div`
    border: 1px solid red;
    display: flex;
    width: 75%;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    height: 12vh;
    flex-wrap: wrap;
`

export const Title = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 80%;
   height: 3.5rem;
   border: 1px solid black;

   h2, p {
       color: var(--white);
   }
`