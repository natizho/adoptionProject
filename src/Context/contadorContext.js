import React, {createContext,useState} from "react";
import { View, Text } from 'react-native'

export const contadorPokemonContext = createContext({});

const contadorContext = ({children}) => {
    const [contadorPokemon,setcontadorPokemon] = useState([]);

    return(
        <contadorPokemonContext.Provider
        value={{
            contadorPokemon,
            setcontadorPokemon,

        }}>
            {children}
            
        </contadorPokemonContext.Provider>
    );
}

export default contadorContext
