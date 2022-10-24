import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const APP_KEY = "21a9882837fcacebe603dc98696d6333";
  const API_Id = "7c49f72a";
  const [ingredientsList, updateIngredientsList] = useState([]);
  const searchForRecipe = (query) => {
    const url = `search?q=${query}&app_id=${API_Id}&app_key=${APP_KEY}`;
    fetch(url, {mode: "no-cors"}).then(response => { 
      return response.json();
    }).then(
      res => {
        console.log(res.hits);
      updateIngredientsList(res.hits);
      }
    ).catch(err => {
      console.log(err);
    })
  }
  useEffect(()=>{
    searchForRecipe("chicken");
  })
  return (
    <div className='Apps'>
      <header className='App-header'>
        <div className='Wrapper'>
          <h1>Hello</h1>
          {ingredientsList.map((item)=>{
            return (
              <div className='Ingredient'>
                <h1>{item}</h1>
                <span>{item.recipe.label}</span>
                {/* <img src={item.recipe.image} alt="loading" />
                {item.recipe.ingredientsLines.map((step)=>{
                 return <p>{step}</p>;
                })} */}
              </div>
            )
          })}   
        </div>

      </header>
    </div>
  );
}

export default App;
