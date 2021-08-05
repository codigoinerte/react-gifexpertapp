import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    const handleInputCHange = (e) => {
        // console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log('submit echo');
        if(inputValue.trim().length>2)
        {
            setCategories(cats => [inputValue, ...cats ]);
            setinputValue('');
        }
        
    }

    return (
        
          <form onSubmit={ handleSubmit }>
          <input
                type="text"
                value={ inputValue }
                onChange={ handleInputCHange }
                 /> 
          </form>       
        
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}