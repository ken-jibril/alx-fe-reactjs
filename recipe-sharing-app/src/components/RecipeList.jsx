import useRecipeStore from "../store/RecipeStore";


function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div className="recipe-list">
            <h2>Recipe List 🥧</h2>
            {recipes.length === 0 && <p>No recipes yet, add one above 👆</p>}
            <div>
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-item">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;