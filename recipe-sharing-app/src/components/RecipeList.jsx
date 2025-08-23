import useRecipeStore from "./recipeStore";

export const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updatedRecipe = useRecipeStore((state) => state.updatedRecipe);
  const newTitle = useRecipeStore((state) => state.newTitle);
  const newDescription = useRecipeStore((state) => state.newDescription);
  const setNewTitle = useRecipeStore((state) => state.setNewTitle);
  const setNewDescription = useRecipeStore((state) => state.setNewDescription);

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New Title"
          />
          <textarea
            value={newDescription}
            onChange={() => setNewDescription}
            placeholder="New Description"
          />

          <button onClick={() => deleteRecipe(recipe.id)}>🗑</button>
          <button onClick={() => updatedRecipe(recipe.id)}>Update</button>
        </div>
      ))}
    </>
  );
};
