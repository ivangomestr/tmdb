import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MovieDetailsPage } from "../pages/MovieDetailsPage"


export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path ="detalhes/:id" element={<MovieDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}