import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';

interface SingleDrinkPageProps{
    params:Param;
}

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const fetchSingleDrink = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url + id);
    if(!response.ok){
        throw new Error(`No Drink Found`);
    }

    return response.json();
}

const SingleDrinkPage: React.FC<SingleDrinkPageProps> = async ({params}) => {
    const {id} = params;
    const data = await fetchSingleDrink(id);
    const title = data?.drinks[0].strDrink;
    const imgSrc = data?.drinks[0].strDrinkThumb;

    return (
        <div>
            <Link href={`/drinks`} className='btn btn-primary mt-8 mb-12'>
                Back to drinks
            </Link>
            <Image src={imgSrc} alt='' width={300} height={300} className='h-48 w-48 rounded-lg' priority/>
            {/* <Image src={DrinkImg} alt={title} className='h-48 w-48 rounded-lg'/> */}
            <h1 className='text-4xl mb-8'>{title}</h1>
        </div>
    );

}

export default SingleDrinkPage