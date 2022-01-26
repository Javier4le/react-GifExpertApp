import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

   const [state, setState] = useState({
      data: [],
      loading: true,
   });

   // Esto ejecuta la función cuando el componete se renderiza por primera vez solamente (En React con clases sería el 'componentDidMount')
   useEffect(() => {
      getGifs(category)
         .then(imgs => {

            setState({
               data: imgs,
               loading: false,
            });

         });
   }, [category]);


   return state; // { data: [], loading: true };

}