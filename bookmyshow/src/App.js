import "./App.css";
import axios from "axios";

// Routes
import { Routes, Route } from "react-router-dom";

// React-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {};
axios.defaults.params["api_key"]= "14cfa52f269c39895919afd259f24e7d";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
