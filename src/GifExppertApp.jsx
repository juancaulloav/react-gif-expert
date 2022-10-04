import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExppertApp = () => {

const [categories, setCategories] = useState([ 'Jujutsu Kaisen'])
const onAddCategory = ( newCategory ) =>{

if (categories.includes(newCategory)) return;

setCategories([newCategory,...categories])
// console.log( newCategory );
//setCategories([ newCategory, ...categories ])
}
return (
<>    

  <h1>GifExppertApp</h1>


<AddCategory 

onNewCategory = { (value) => onAddCategory(value) }
currentCategories = { categories }
/>


  { categories.map( (category)=> (<GifGrid key={ category } category = { category } />)
  )
  }


</>
)
}
