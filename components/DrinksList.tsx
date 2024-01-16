import * as React from 'react';
import Link from 'next/link';

interface DrinksListProps{
    drinks: Drink[]
}

const DrinksList: React.FC<DrinksListProps> = ({drinks}) => {

  return (
    <ul className='menu menu-vertical pl-0'>
        {drinks.map(drink => (
            <li key={drink.idDrink} className='text-xl font-medium'>
                <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
            </li>
        ))}
    </ul>
  )
}

export default DrinksList