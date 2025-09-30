import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) return <p className="text-center py-6">Loading recipe...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 my-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Author:</strong> {recipe.author}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Cook Time:</strong> {recipe.cookTime} |{" "}
        <strong>Servings:</strong> {recipe.servings}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions</h2>
      <ol className="list-decimal pl-6 space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
