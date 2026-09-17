import { Link } from "react-router";


const HeroBanner = () => {
 

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105 opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-wider text-red-400 uppercase bg-red-500/10 border border-red-500/20 rounded-full">
          Unlimited Entertainment
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          DISCOVER YOUR NEXT <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
            FAVORITE MOVIE
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore and discover your favorite movies and TV shows from around the world. Dive into cast details, ratings, and detailed overviews in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
           to="/movies"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
          >
            Explore Now 🎬
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;