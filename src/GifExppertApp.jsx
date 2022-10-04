import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExppertApp = () => {

const [categories, setCategories] = useState([ 'Jujutsu Kaisen'])
const onAddCategory = ( newCategory ) =>{

if (categories.includes(newCategory)) return;

setCategories([newCategory,...categories])
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
