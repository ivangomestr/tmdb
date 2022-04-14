import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   background: var(--purple);
   height: 50vh;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
`

export const Title = styled.div`
   width: 45vw;
   height: 12vh;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: -2%;

   h2 {
       color: var(--white);
       font-size: 3rem;
   }
`

export const FilterContainer = styled.div`
   width: 7rem;
   height: 3rem;
   margin-bottom: -6%;
   
   p {
       color: var(--white);
       font-weight: 500;
       font-size: 0.90rem;
   }
`

export const Content = styled.div`
   width: 55vw;
   height: 10vh;
   display: flex;
   flex-wrap: wrap;
`

export const TagContainer = styled.div`
   background: var(--white);
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 4vh;
   width: -moz-fit-content;
   width: fit-content;
   padding: 14px;
   margin: 7px;

   p {
       color: var(--silver);
       font-weight: 700;
   }
`
