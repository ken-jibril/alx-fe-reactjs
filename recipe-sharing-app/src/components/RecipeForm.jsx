import React from "react";
import { useState } from "react";
import useRecipeStore from "../store/RecipeStore";

function AddRecipeForm() {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ 
            id: Date.now(), 
            title, 
            description 
        });
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Recipe</h2>
            <label htmlFor="">New Recipe</label>
            <input 
            type="text"
            value={title}
            placeholder="Recipe Title"
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <label htmlFor="">Recipe Description</label>
            <textarea 
            name="description" 
            id="textarea"
            value={description}
            placeholder="Enter your description"
            onChange={(e) => setDescription(e.target.value)}
            required
            />

            <button type="submit">Add Recipe</button>
        </form>
    )
}
export default AddRecipeForm;