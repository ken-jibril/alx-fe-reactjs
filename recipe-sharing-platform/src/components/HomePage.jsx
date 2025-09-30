import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
       fetch('/src/data.json')
       .then(res => res.json())
       .then(data => {
        setRecipes(data)
       })
       .catch(error => {
        setError('Error fetching recipes')
        setLoading(false)
       });
    }, [])

    return ( 
         <div className="my-0">

  <h1 className="bg-blue-800 w-full text-center text-4xl text-white py-2 mb-6">
    Recipes
  </h1>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
  {/* GRID CONTAINER */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {recipes.map((recipe) => (
      <div
        key={recipe.id}
        className="shadow-lg bg-white rounded-xl p-4 max-w-xs flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out mx-auto"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          width="250"
          className="rounded-lg"
        />
        <h2 className="bg-green-600 text-2xl px-4 py-2 my-3 rounded-lg font-semibold text-center hover:text-white">
          {recipe.title}
        </h2>
        <p className="leading-relaxed text-gray-700 text-center">
          {recipe.summary}
        </p>
        <Link
            to={`/recipes/${recipe.id}`}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
            View Details
        </Link>
      </div>
    ))}
  </div>
</div>

     );
}

export default HomePage;