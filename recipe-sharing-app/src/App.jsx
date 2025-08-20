import "./App.css";
import { AddRecipeForm } from "./stores/AddRecipeForm";
import { RecipeList } from "./stores/RecipeList";

function App() {
  return (
    <>
      <RecipeList />
      <AddRecipeForm />
    </>
  );
}

export default App;
