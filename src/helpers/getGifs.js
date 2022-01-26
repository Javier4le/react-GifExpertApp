


// Aquí se consume el API con JS
export const getGifs = async (category) => {
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=a2aamLHnHguz0ivRkOPRWVDFr97QcgA2`
   const resp = await fetch(url);
   const { data } = await resp.json();

   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url
      }
   })

   // console.log(data);
   // console.log(gifs);
   // setImages(gifs)

   return gifs;

}