import { FilterFilm } from "../../components/FilterFilm"
import { Header } from "../../components/Header"
import { Container } from "./style"

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <FilterFilm />
    </Container>
  )
}