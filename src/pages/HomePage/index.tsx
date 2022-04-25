import { FilterFilm } from "../../components/FilterFilm"
import { Header } from "../../components/Header"
import { MovieCard } from "../../components/MovieCard"
import { CardContainer, Container } from "./style"

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <FilterFilm />

      <CardContainer>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        
      </CardContainer>
    </Container>
  )
}