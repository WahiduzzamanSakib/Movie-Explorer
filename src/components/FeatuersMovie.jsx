import { useState, useEffect } from "react";
import DetailsModal from "./DetailsModal";
import { Link } from "react-router";

function FeatuersMovie() {
    const [shows, setShows] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then((response) => response.json())
            .then((data) => {
                setShows(data);
            })
            .catch((error) => {
                console.error("Error fetching shows:", error);
            });
    }, []);



    return (
        <div className="bg-slate-950 text-white  px-6 py-8 border-t border-slate-700">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Featuers Movies
                </h1>
                <Link to="/movies" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition cursor-pointer">View All</Link>
            </div>


            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shows?.slice(0, 3).map((movie) => (
                    <div
                        key={movie?.id}
                        className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col justify-between"
                    >
                        <div className="h-60 bg-slate-800 p-2">
                            {movie.image?.medium && (
                                <img
                                    src={movie?.image?.medium}
                                    alt={movie.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 line-clamp-1">
                                {movie?.name}
                            </h2>

                            <div className="flex items-center justify-between text-sm text-slate-400 mb-4">

                                <span>
                                    <span >Published: </span>
                                    <span className="font-bold text-white">
                                        {movie?.premiered
                                            ? movie.premiered.slice(0, 4)
                                            : " "}
                                    </span>
                                </span>

                                <span className="font-medium text-amber-400">
                                    ⭐ {movie?.rating?.average}
                                </span>
                            </div>

                            <button
                                onClick={() => setSelectedMovie(movie)}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition cursor-pointer"
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedMovie && (
                <DetailsModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    );
}

export default FeatuersMovie;