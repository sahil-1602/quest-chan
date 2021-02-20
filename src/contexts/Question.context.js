import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const QuestionContext = createContext();

export function QuestionProvider(props) {
    const [question, setQuestion] = useState();

    useEffect(() => {
        const apiURL = `localhost:8000/api/question`
        axios.get(apiURL, {headers: {Accept: "application/json"}})
            .then((res) => {
                setQuestion((question) => {
                    return res.data;
                })
            }) .catch((error) => {
                console.log(error);
        })
    }, []);

    return (
        <QuestionContext.Provider value={{questions: question, setQuestion: setQuestion}} >
            {props.children}
        </QuestionContext.Provider>
    )
}