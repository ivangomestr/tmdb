import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
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
    width: 100%;
    height: 14vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const CastContainer = styled.div`
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

   h2, p {
       color: var(--white);
   }
`

export const Cast = styled.div`
   border: 1px solid black;
   width: 12rem;
   height: 2rem;
   margin-top: 10%;
   margin-left: 6%;

   h2 {
       font-size: 1.7rem;
   }
`

export const SliderContainer = styled.div` 
   display: flex;
   width: 90%;
   height: 30%;
   /* border: 1px solid black; */
   margin-top: 20px;
   margin-left: 6%;
   overflow-x: scroll;
`

export const Card = styled.div`
   background: var(--white);
   width: 191px;
   height: 336px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border-radius: 4px;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   padding: 10px;
   margin: 10px;

   img {
       width: 175px;
       height: 222px;
       border-radius: 4px;
   }

   p {
       font-size: 1rem;
       margin-bottom: 2rem;
   }
`