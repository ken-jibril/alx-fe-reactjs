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
}))

export default useRecipeStore;