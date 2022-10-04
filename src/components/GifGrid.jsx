
export const GifGrid = ( { category }) => {
    
    const getGifs= async () => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=slVWKfA4fQ697OQjam3NTWuVc3QdlBDb&q=${ category}`
        const resp = await fetch ( url )
    } 
  
    return (
    <>
      <h3>{ category }</h3>

    </>
  )
}
