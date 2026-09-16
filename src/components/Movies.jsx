function Movies() {
 
    fetch(`https://api.tvmaze.com/shows`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });


  return (
    <div className="bg-gray-950 text-white border p-20 m-2 border-blue-800">
      Movies
    </div>
  );
}
export default Movies;