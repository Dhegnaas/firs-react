import React, { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import abdi from "./assets/image.png"; // hubi path sax ah
import searchIcon from "./assets/search.svg"; // hubi path sax ah
import Spinner from "./components/spinner.jsx"; // ✅ sax

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`, // ✅ V4 token sax ah
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMoviesList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setErrorMessage("");

      try {
        const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) {
          throw new Error("failed to fetch movies");
        }

        const data = await response.json();

        // 🟢 log si aad u hubiso
        console.log("TMDB response:", data);

        setMoviesList(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setErrorMessage("Error fetching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <div className="pattern" />
      <div className="wrapper max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <img src={abdi} alt="ABDIRAHMAN-1 Banner" className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-black">
            Find <span className="text-gradient">Movies</span> you'll enjoy
            without the dhibtoon
          </h1>

          <div className="mt-6">
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              icon={searchIcon}
            />
          </div>
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px] text-3xl font-bold text-black">All Movies</h2>
          {isLoading ? (
            <>
              <Spinner />
              <p className="text-white text-center">Loading...</p>
            </>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul className="space-y-2">
              {movieList.map((movie) => (
                <li
                  key={movie.id}
                  className="text-white border-b border-gray-700 pb-2"
                >
                  {movie.title}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
