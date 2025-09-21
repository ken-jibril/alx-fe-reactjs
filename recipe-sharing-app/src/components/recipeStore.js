import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: JSON.parse(localStorage.getItem("recipes")) || [],

      addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes)); 
      return { recipes: updatedRecipes };
    }),

    setRecipes: (newRecipes) => {
        localStorage.setItem("recipes", JSON.stringify(newRecipes));
        set({ recipes: newRecipes });
    },

      deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  
  updateRecipe: (id, updatedTitle, updatedDescription) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, title: updatedTitle, description: updatedDescription }
          : recipe
      ),

       updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedRecipe } : r)),
    })),
    })),
}))

export default useRecipeStore;