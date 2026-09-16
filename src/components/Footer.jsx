const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">
              🎬 MovieExplorer
            </h2>
            <p className="text-sm mt-1">
              Discover your favorite movies and shows.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="/"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="/movies"
              className="hover:text-white transition"
            >
              Movies
            </a>

            <a
              href="https://www.tvmaze.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              TVMaze
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm">
          © 2026 MovieExplorer. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

