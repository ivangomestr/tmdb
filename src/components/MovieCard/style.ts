import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 10vw;
   height: 33.5vh;
   margin: 14px;

   h3 {
       font-size: 1rem;
    }

   p {
       font-size: 0.85rem;
       color: var(--gray);
       font-weight: bold;
   }

   img {
     width: 176px;
     height: 264px;
     border-radius: 4px;
     border: 1px solid #E7E7E7;
   }
`