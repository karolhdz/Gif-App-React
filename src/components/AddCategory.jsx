import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {
  
    const [inputValue, setInputValue] = useState('')

    const onInputChage = ({target}) =>{
        setInputValue(target.value);
    };

    const onSubmit = (event) =>{
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if( newInputValue <= 1) return;

        // setCategories( (categories) => [ inputValue, ... categories]);

        onNewCategory( newInputValue );

        setInputValue('');
        
        
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={ onInputChage }
            />
        </form>
  )
}


