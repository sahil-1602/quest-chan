import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Grid, IconButton} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {ShareRounded} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import QuestionCard from "../components/QuestionCard";

const useStyles = makeStyles({
    root: {
        minWidth: 800,
        maxHeight: 60,
        // maxWidth: 600,
        margin: '10px 10px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    question: {
        minWidth: "800"
    }
});

export default function Question(props) {
    // const {questions, setQuestion} = useContext(QuestionListContext);
    const {match: {params}} = props;
    const {questionId} = params;
    const [question, setQuestion] = useState();
    const classes = useStyles();
    // const question = undefined;


    useEffect(() => {
        // const apiURL = `https://cors-anywhere.herokuapp.com/localhost:8000/api/question`
        const apiURL = `http://localhost:8000/api/question/${questionId}`
        axios.get(apiURL, {headers: {Accept: "application/json"}})
            .then((res) => {
                setQuestion(res.data);
            }).catch((error) => {
            console.log(error);
        })
    }, []);

    if(!question) {
        return (
            <div>
                Question got lost. Sorry. Go away.
            </div>
        )
    }
    else {
        return (
            <div>
                <Typography variant="h5" component="h2">
                    {question.query}
                </Typography>
                <Typography variant="body2" component="p" color={"textSecondary"}>
                    {question.description}
                </Typography>
            </div>
            // <div>
            //
            // </div>
            // <Card className={classes.root} >
            //     <CardContent>
            //         <Typography className={classes.title} color="textSecondary" gutterBottom>
            //             #tag1 #tag2
            //         </Typography>
            //     </CardContent>
            //     <CardActions disableSpacing>
            //         <IconButton aria-label="add to favorites">
            //             <FavoriteIcon />
            //         </IconButton>
            //         <IconButton aria-label="share">
            //             <ShareRounded />
            //         </IconButton>
            //     </CardActions>
            // </Card>
        )
    }
}