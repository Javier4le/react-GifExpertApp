// import React, { useEffect, useState } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

   const { data:images, loading } = useFetchGifs(category);

   // // Esto ejecuta la función cuando el componete se renderiza por primera vez solamente (En React con clases sería el 'componentDidMount')
   // useEffect(() => {
   //    getGifs(category)
   //       // .then(imgs => setImages(imgs));
   //       .then(setImages);
   // }, [category]);


   return (
      <>
         <h3 className="animate__animated animate__fadeIn">{category}</h3>

         { loading && <p className="animate__animated animate__flash">Loading...</p> }

         <div className="card-grid">
            {
               // images.map(img => (
               //    <li key={img.id}>{img.title}</li>
               // ))
               // images.map(({ id, title }) => (
               //    <li key={id}>{title}</li>
               // ))
               images.map(img => (
                  <GifGridItem
                     key={img.id}
                     // img={img}
                     {...img}
                  />
               ))
            }
         </div>
      </>
   )
};
