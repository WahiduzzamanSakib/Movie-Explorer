function DetailsModal({ movie, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <div className="bg-slate-900 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-hidden">

        <div className="w-full h-72  bg-slate-800">
          <img
            src={movie?.image?.original  || "movie?.image?.medium"}
            alt={movie.name}
            className="w-full h-full object-fill"
          />
        </div>

        <div className="p-6">

          <h2 className="text-3xl font-bold mb-4">
            {movie?.name}
          </h2>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-4">
            <span className="text-amber-400 font-semibold">
              ⭐ {movie.rating?.average}
            </span>

            <span>
              📅 {movie?.premiered}
            </span>

            <span>
              🎬 {movie?.type}
            </span>

            <span>
              ⏱️ {movie.runtime ? `${movie.runtime} min` : `${movie.averageRuntime} min`}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {movie?.genres?.map((genre) => (
              <span
                key={genre}
                className="bg-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Overview
          </h3>

          <div
            className="text-slate-300 leading-relaxed mb-5"
            dangerouslySetInnerHTML={{
              __html: movie?.summary || "No summary available."
            }}
          />

          <div className="space-y-2 text-slate-300 mb-6">
            <p>
              <strong>Language:</strong>{" "}
              {movie?.language}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {movie?.status}
            </p>

            <p>
              <strong>Network:</strong>{" "}
              {movie?.network?.name}
            </p>

            <p>
              <strong>OfficialSite:</strong>{" "}
              {movie?.officialSite }
            </p>

          </div>

          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition cursor-pointer"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}

export default DetailsModal;

