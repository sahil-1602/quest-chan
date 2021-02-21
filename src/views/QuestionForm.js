import React, {useContext} from 'react';
import useInputState from '../hooks/useInputState';
import axios from 'axios';
import {UserContext} from '../contexts/user.context';
import {useHistory} from 'react-router-dom';

export default function QuestionForm(props){
    const [query, handleQueryChange, resetQuery] = useInputState("");
    const [description, handleDescriptionChange, resetDescription] = useInputState("");
    const [img, handleImgChange, resetImg] = useInputState("");
    const {user} = useContext(UserContext);
    const history = useHistory();

    const handleClick = () => {
        // console.log("clicked");
        const question = {
            query: query,
            description: description,
            img: img,
            author : {
                id: user._id,
                username: user.username
            }
        }
        axios.post('http://localhost:8000/api/question', question)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
        history.push("/");
    }

    return(
        <div style={{margin:"40px"}}>
            <h1>Add your Question..</h1>
            <input type="text" placeholder="Query" value={query} onChange={handleQueryChange}/>
            <br/>
            <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange}/>
            <br/>
            <input type="text" placeholder="Image url" value={img} onChange={handleImgChange}/>
            <br/>
            <button onClick={() => handleClick()}>Upload</button>
        </div>
    )
}