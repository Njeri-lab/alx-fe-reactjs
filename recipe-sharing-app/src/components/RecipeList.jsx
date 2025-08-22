import { useState } from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe); // ✅ hook it in

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingId, setEditingId] = useState(null); // ✅ track which recipe you’re editing

  const handleUpdate = (id) => {
    updateRecipe(id, { title: newTitle, description: newDescription });
    setNewTitle("");
    setNewDescription("");
    setEditingId(null); // exit edit mode
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <button type="button" onClick={() => deleteRecipe(recipe.id)}>
            🗑
          </button>

          {editingId === recipe.id ? (
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
              <button onClick={() => handleUpdate(recipe.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <button type="button" onClick={() => setEditingId(recipe.id)}>
              Update
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
