import { useState } from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updatedRecipe = useRecipeStore((state) => state.updatedRecipe);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const handleUpdate = (id) => {
    updatedRecipe(id, {
      title: newTitle,
      description: newDescription,
    });
    setNewTitle("");
    setNewDescription("");

    <form>
      <div>
        <input
          type="text"
          value={newTitle}
          placeholder="New Title"
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <textarea
          value={newDescription}
          placeholder="New Description"
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
    </form>;
  };

  return (
    <>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button type="button" onClick={() => deleteRecipe(recipe.id)}>
              🗑
            </button>

            <input
              type="text"
              value={newTitle}
              placeholder="New Title"
              onChange={(e) => setNewTitle(e.target.value)}
            />

            <textarea
              value={newDescription}
              placeholder="New Description"
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button type="button" onClick={() => handleUpdate(recipe.id)}>
              Update
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
