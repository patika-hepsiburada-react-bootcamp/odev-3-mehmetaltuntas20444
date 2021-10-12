import { createContext, useState, useContext } from "react";

const VoteContext = createContext();

export const VoteProvider= ({children}) => {
    const [heroes, setHeroes] = useState({ batman: 0, spiderman: 0, superman: 0});

    const values = {
        heroes,
        setHeroes,
    };
    return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>
};

export const useVote = () => useContext(VoteContext);