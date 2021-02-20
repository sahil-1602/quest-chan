import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import {IconButton, Paper} from "@material-ui/core";
import {ExpandMoreRounded, ShareRounded} from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
    root: {
        minWidth: 800,
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
    // expand: {
    //     transform: 'rotate(0deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // },
    // expandOpen: {
    //     transform: 'rotate(180deg)',
    // },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    #tag1 #tag2
                </Typography>
                <Typography variant="h5" component="h2">
                    Is my use of useMemo() appropriate?
                </Typography>
                {/*<Typography className={classes.pos} color="textSecondary">*/}
                {/*    adjective*/}
                {/*</Typography>*/}
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
                {/*<Paper variant={"outlined"} />*/}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareRounded />
                </IconButton>
                {/*<IconButton*/}
                {/*    className={clsx(classes.expand, {*/}
                {/*        [classes.expandOpen]: expanded,*/}
                {/*    })}*/}
                {/*    onClick={handleExpandClick}*/}
                {/*    aria-expanded={expanded}*/}
                {/*    aria-label="show more"*/}
                {/*>*/}
                {/*    <ExpandMoreRounded />*/}
                {/*</IconButton>*/}
            </CardActions>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
