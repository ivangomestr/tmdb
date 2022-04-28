import { FilterFilm } from "../../components/FilterFilm"
import { Header } from "../../components/Header"
import { MovieCard } from "../../components/MovieCard"
import { Pagination } from "../../components/Pagination"
import { CardContainer, Container, Content } from "./style"



export const HomePage = () => {
  return (
    <Container>
      <Header />
      <FilterFilm />

      <Content>
        <CardContainer>
          <MovieCard />
        </CardContainer>
      </Content>

      <Pagination />
    </Container>
  )
}