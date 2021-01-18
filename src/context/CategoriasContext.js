import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

//Crear el context

export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state

const CategoriasProvider = (props) => {

    //CREAR EL STATE DEL CONTEXT

    const [ categorias, setCategorias ] = useState([]);

    //ejecutar el llamado a la api

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const resultado = await axios(url);
            setCategorias(resultado.data.drinks);
        }
        obtenerCategorias();
    }, [])

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;