import './App.css';
import {useEffect, useRef, useState} from 'react';

function App() {
  const APP_KEY = "21a9882837fcacebe603dc98696d6333";
  const API_Id = "7c49f72a";
  const inputRef = useRef(null);
  const [ingredientsList, updateIngredientsList] = useState([]);
  const search = ()=>{
    searchForRecipe(inputRef.current.value);
  }
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
    searchForRecipe("mutton");
  },[])
  return (
    <div className='Apps'>
      <header className='App-header'>
        <div>
          <input ref={inputRef} placeholder='Search Recipe' />
          <button onClick={search}>search</button>
        </div>
        <div className='Wrapper'>
          {ingredientsList.map((item)=>{
            return (
              <div className='Ingredient'>
                <span>{item.recipe.label}</span>
                <img src={item.recipe.image} alt="loading" />
                <div className='steps'>
                {item.recipe.ingredientLines.map((step)=>{
                  return <p>{step}</p>;
                })}
                </div>
              </div>
            )
          })}   
        </div>

      </header>
    </div>
  );
}

export default App;
