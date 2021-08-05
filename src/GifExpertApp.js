// import React from 'react';

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp  = () => {

    // const categories = ['One Punch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Attack on Titan']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
           
            <ol>
                {                    
                    categories.map( category=>(
                        //    return <li key={ category }> { category } </li>
                        <GifGrid 
                            key={category}
                            category={category}
                             />
                             
                             ))
                }
            </ol>
            

        </>
    );
}

export default GifExpertApp;