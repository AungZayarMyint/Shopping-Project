import { createContext, useState } from "react";

export const FirstContext = createContext(null);

const FirstContextProvider = (props) => {
    const [userName, setUserName] = useState("jonathan");
    const liveIn = "YGN";

    return(
        <FirstContext.Provider value={{userName, liveIn}}>
            {props.children}
        </FirstContext.Provider>
    )
};

export default FirstContextProvider;