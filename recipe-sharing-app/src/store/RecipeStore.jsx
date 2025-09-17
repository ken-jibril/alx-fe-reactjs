import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [
        {
            id: 1,
            title: 'Cake',
            description: 'Delicious chocolate cake'
        },
        {
            id: 2,
            title: 'Pasta',
            description: 'Italian pasta with tomato sauce'
        },
        {
            id: 3,
            title: 'Salad',
            description: 'Fresh garden salad'
        },
        {
            id: 4,
            title: 'Soup',
            description: 'Hearty vegetable soup'
        },
        {
            id: 5,
            title: 'Sandwich',
            description: 'Ham and cheese sandwich'
        }
    ],
    addRecipe: () => set((state) => ({ recipes: [...state.recipes, {}] })),
    setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}))

export default useRecipeStore;