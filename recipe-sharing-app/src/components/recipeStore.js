import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  newTitle: "",
  newDescription: "",

  setNewTitle: (title) => set({ newTitle: title }),
  setNewDescription: (description) => set({ newDescription: description }),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updatedRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id
          ? {
              ...recipe,
              title: state.newtitle,
              description: state.newDescription,
            }
          : recipe
      ),
    })),
}));

export default useRecipeStore;
