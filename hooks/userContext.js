import { createContext, useState} from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState(null);
    
    return <UserContext.Provider value={{ user, setUser, name, setName }}>{children}</UserContext.Provider>;
    }
