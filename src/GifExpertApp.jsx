import React, { useState } from 'react'
import { AddCategory, GifGrill } from './components';

 export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( ['One Punch'] );

    const onAddCategory = ( newCategory ) =>{
        console.log( newCategory );

        if( categories.includes(newCategory) ) return;
        
        setCategories(categories => [ newCategory, ...categories ]);


    }
    
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input en componente independiente*/}

        {/* Listado de items */}
        {/* Solución mandado la función al hijo */}
        {/* <AddCategory setCategories = { setCategories }/> */}

        <AddCategory
            onNewCategory = { value => onAddCategory(value) }
        />

            { categories.map( category =>
                    <GifGrill key={ category } category= { category } />    
                ) 
            }

            {/* Gif item */}
    </>
  )
}


