import * as React from 'react';
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

const fetchDrinks = async() => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if(!response.ok){
    throw new Error(`Failed to fetch drinks`);
  }
  const data = await response.json();
  return data;
}

const DrinksPage = async () => {
  const drinks = await fetchDrinks();
  console.log(drinks);
  return (
    <div>
        <h1 className='text-3xl'>DrinksPage</h1>
    </div>
  )
}

export default DrinksPage;