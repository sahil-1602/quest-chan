import React, {useEffect, useState} from 'react';
import axios from 'axios';
import QuestionCard from "../components/QuestionCard";

export default function Profile(props){
    let url = window.location.pathname;
    let userId = url.substr(9,url.length);
    const [user, setUser] = useState();
    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const resUser = await axios.get(`http://localhost:8000/users/${userId}`);
            await setUser(resUser.data);
            // while(user === undefined){
            //     console.log("keep looping")
            // }
            url = `http://localhost:8000/api/question/user/${user._id}`;
            const resQuestion = await axios.get(url);
            setQuestions(resQuestion.data);
        }
        fetchData();    
    }, [])

    if(user?.username?.length > 0){
        if(questions.length===0){
            return(
                <div>
                    <h1>Profile Page for {user.username}</h1>
                    <h2>NO QUESTIONS POSTED YET</h2> 
                </div>
            );
        }else{
            return(
                <div style={{marginTop: "20px", marginBottom: "200px"}}>
                    Profile Page for {questions[0]?.author.username}
                    {questions?.map((question, i) => <QuestionCard key={i} question={question}/>)}
                </div>
            )
        }
    }else{
        return(
            <div><h1>SORRY USER DOESNT EXISTS</h1></div>
        )
    }
}