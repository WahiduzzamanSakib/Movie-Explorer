
const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-red-500">
            🎬 Movie<span className="text-white">Explorer</span>
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition hidden sm:block"
            >
              Home
            </a>

            <a
              href="/movies"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition"
            >
              Movies
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

