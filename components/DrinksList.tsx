import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface DrinksListProps{
    drinks: Drink[]
}

const DrinksList: React.FC<DrinksListProps> = ({drinks}) => {

  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
        {drinks.map(drink => (
            <li key={drink.idDrink} className='text-xl font-medium'>
                <Link href={`/drinks/${drink.idDrink}`}>
                  <div className='relative h-48 mb-4'>
                    <Image 
                      src={drink.strDrinkThumb}
                      fill
                      sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw'
                      alt={drink.strDrink}
                      className='rounded-md object-cover'
                    />
                  </div>
                  {drink.strDrink}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default DrinksList