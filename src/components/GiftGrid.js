import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({category}) => {
    
    const { data:images, loading } = useFetchGifs( category );
    
   
    return (
        <>
            <h3 className="animate__animated animate__bounce animate__delay-2s"> { category } </h3>

            { loading && <p> Loading... </p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }  
                        />
                    ))
                } 

            </div>
        
        </>
  )
}

