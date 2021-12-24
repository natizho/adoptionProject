import React, {createContext,useState} from "react";

export const PokeTeamContext = createContext({});

const index = ({children}) => {

    const [PokeTeam,setPokeTeam] = useState([]);

    return(
        <PokeTeamContext.Provider
        value={{
            PokeTeam,
            setPokeTeam,

        }}>
            {children}
            
        </PokeTeamContext.Provider>
    );
};

export default index;