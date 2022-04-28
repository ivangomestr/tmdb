import {
    useContext,
    createContext,
    useEffect,
    useState
} from "react"

import { MoviesProviderProps } from "../interfaces/props"
import { MovieData, MoviesContextData } from "../interfaces/types"

import axios from "axios"
import { POPULAR_BASE_URL } from "../services/api"

const MoviesContext = createContext<MoviesContextData>(
    {} as MoviesContextData
)

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
    const [movies, setMovies] = useState<MovieData[]>([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        axios.get(`${POPULAR_BASE_URL}&page=${pageNumber}`)
            .then(response => {
                setMovies(response.data.results)
            })
    }, [])

    return (
        <MoviesContext.Provider value={{ movies, pageNumber }}>
            {children}
        </MoviesContext.Provider>
    )

}

export const useMovies = () => {
    const context = useContext(MoviesContext)

    return context
}