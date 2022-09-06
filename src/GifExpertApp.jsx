import { useState } from 'react';

// por defecto detectará el index
import { AgregarCategoria, GifGrid } from './components';

export const GifExpertApp = () => {
    // iniciar como arreglo []
    const [categories, setCategories] = useState(['One Punch']);
    const agregarCategoriaLista = (nuevaCategoria) => {
        if(categories.includes(nuevaCategoria)) return;

        setCategories([...categories, nuevaCategoria]);
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>

            {/* input - componente independiente */}
            {/* enviar referencia a setCategories */}
            <AgregarCategoria nuevaCategoria={ value => agregarCategoriaLista(value) } />

            {/* Listado de elementos (gifs) */}
            { categories.map(category => { 
                return (
                    //<li key={ category }>{ category }</li>
                    <GifGrid key={ category } category={ category }/>
                )
            }) }
        </>
    )
}
