import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   width: 10vw;
   height: 31vh;
   margin: 10px;
   padding-top: 14px;

   p {
       font-size: 0.85rem;
       color: var(--gray);
       font-weight: bold;
   }
`