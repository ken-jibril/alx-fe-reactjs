import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    console.log("Recipe submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-lg my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-700">
        Share Your Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:text-lg"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="md:flex md:gap-6">
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Ingredients
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:text-lg"
              placeholder="Write ingredients (one per line)"
              rows="5"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:text-lg"
            placeholder="Write preparation steps (one per line)"
            rows="5"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition md:py-4 md:text-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
