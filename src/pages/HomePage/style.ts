import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   background: var(--background);
`
export const Content = styled.div`
   display: flex;
   height: 100%;
   justify-content: center;
   align-items: center;
`

export const CardContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   height: 100%;
   width: 100%;
   margin-top: 2rem;
   border: 1px solid red;
`