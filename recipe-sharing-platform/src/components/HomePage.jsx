import { useEffect, useState } from "react";

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
          <div className="mx-0">
            {loading && <p>Loading</p>}
            {error && <p>{setError}</p>}
            <h1 className="bg-blue-800 w-full text-center text-4xl text-white py-2 ">Recipes</h1>
            <div className="flex flex-wrap gap-8 shadow-lg bg-white max-w-fit rounded-xl items-center justify-center px-3 py-4 my-3 mx-auto">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="shadow-lg bg-white rounded-xl p-4 max-w-xs flex flex-col items-center hover:scale-110 transition-transform duration-500 ease-in-out">
                        <img src={recipe.image} alt={recipe.title} width='250' className="rounded-lg"/>
                        <h2 className="bg-green-600 text-2xl px-4 max-w-fit py-2 my-2 rounded-lg font-semibold hover:text-white">{recipe.title}</h2>
                        <p className="leading-relaxed ">{recipe.summary}</p>
                        </div>
                ))}
            </div>
          </div>
     );
}

export default HomePage;