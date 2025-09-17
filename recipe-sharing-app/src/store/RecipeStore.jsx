import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipes) => set((state) => ({ recipes: [...state.recipes, newRecipes ] })),
    setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}))

export default useRecipeStore;