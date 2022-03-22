import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp = props => {
  
    const [categories, setCategories] = useState(['One Punch']);
    
    return (
    <>
        <h2>GifExpertApp</h2>
        < AddCategory setCategories={ setCategories } />
        <hr />
        
        <ol>
            {
                categories.map( category => (
                    < GiftGrid 
                        key={ category}
                        category={category}/>
                ))
            }
        </ol>
        
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp