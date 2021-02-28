import React from 'react';
import style from './receipe.module.css';

const Recipes = ({tital, calories, image, ingredients}) =>{

   return(
       <div className = {style.recipe}>
           <h1 className = {style.text}>{tital}</h1>
           <p className = {style.text}><b>Calories</b> : {calories}</p>
           <img className = {style.img} src = {image} alt = '' />
           
           <ol>
               
               {ingredients.map( ingredient => (
                   
                   <li>{ingredient.text}</li>
                   
               ))}
               
           </ol>
    
       </div>
       
   )
}

export default Recipes;
