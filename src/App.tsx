import { MoviesProvider } from "./hooks/useMovies"
import { Routers } from "./routes/Routers"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <MoviesProvider>
      <Routers />
      <GlobalStyle />
    </MoviesProvider>
  )
}

