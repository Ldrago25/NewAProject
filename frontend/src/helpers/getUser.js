export const getUser=async()=>{
    let category='montañas';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=kMpKU0zyVDspt9HNVZ3l0DshLxFusBo4`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data);
    const gifs = data.map( img => {
        return{
            id:img.id,
            title: img.title,
            url: img.images?.fixed_height.url,
            height:img.images?.fixed_height.height,
            width:img.images?.fixed_height.width
        }
    })
    return gifs;
  
  }