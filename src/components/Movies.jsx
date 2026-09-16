import { useState } from "react";


function Movies() {
    const [shows, setShows] = useState([]);

    fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => {
            setShows(data);
        })
        .catch((error) => {
            console.error("Error fetching shows:", error);

        });



    return (
        <div className="bg-slate-950 text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-8">All Shows</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shows.map((movie) => (
                    <div
                        key={movie?.id}
                        className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition"
                    >

                        <div className="h-60 bg-slate-800">
                            {movie.image?.medium && (
                                <img
                                    src={movie?.image?.medium}
                                    alt={movie?.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>


                        <div className="p-4 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-semibold mb-2 line-clamp-1">
                                    {movie?.name}
                                </h2>

                                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                                    {/* Release Year */}
                                    <span>
                                        {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}
                                    </span>

                                    {/* Rating */}
                                    <span className="flex items-center gap-1 font-medium text-amber-400">
                                        ⭐ {movie.rating?.average}
                                    </span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <a
                                href={movie.officialSite || movie.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
                            >
                                See Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;