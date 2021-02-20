import React, {createContext, useEffect, useState} from "react";
import axios from 'axios';

export const UserContext = createContext();

export function UserProvider(props) {
    const [user, setUser] = useState();
    
    useEffect(() => {
        axios.get("http://localhost:8000/users")
        .then((res) => {
            console.log(res.data)
            setUser((user) => (
                res.data[0]
            ));
        })
        .catch((err) => (
            console.log(err)
        ))
    }, []);

    return (
        <UserContext.Provider value={{user:user, setUser:setUser}} >
            {props.children}
        </UserContext.Provider>
    )
}