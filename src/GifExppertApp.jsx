
import { useState } from "react";


export const GifExppertApp = () => {
  const [categories, setCategories] = useState([ 'Jujutsu Kaisen' , 'Kimetsu no yaiba'])
  console.log (categories)
  return (
    <>    
    {/*  Titulo  */}
        <h1>GifExppertApp</h1>

    {/* Input */}


    {/* Listado de Gif */}
    <ol>
        { categories.map( category=> {
            return <li key={ category }>{category}</li>
        }) }
    </ol>
        {/* Gif Item */}
    </>
  )
}
