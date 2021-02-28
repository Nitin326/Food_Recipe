import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipes'

const App = () =>{

   const App_Id = '3aed5082';
   const App_Key = 'cefe831264160bcd0cd1eec96e8ba3d4';

   const [recipes, setRecipes] = useState([]);
   const [search,setSearch] = useState(' ');

   const [query,setQuery] = useState('paneer');
  

   useEffect(() =>{
    getRecipes();
    // eslint-disable-next-line
   }, [query]);


   const getRecipes = async () => {
     const response  = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
     const data = await response.json();
     setRecipes(data.hits);
     console.log(data.hits);
   }

   const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
   }

   const getSearch = e =>{
     e.preventDefault();
     setQuery(search);
     setSearch('')
   }

   return(
     <div className = 'App'>
       <form className = 'Search-form' onSubmit = {getSearch}>
         <input  className = 'search-bar' type = 'text' value = {search} onChange = {updateSearch} />
         <button className = 'search-button' type = "submit">Search</button>
       </form>
     <div className='recipes'>
       {recipes.map( recipe => (
         <Recipe key = {recipe.recipe.label}
            tital = {recipe.recipe.label}  
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}/>
       ))}
     </div>
     </div>
   )
}

export default App;
