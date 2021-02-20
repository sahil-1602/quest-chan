import logo from './logo.svg';
import React from 'react';
import './App.css';
import ActionBar from "./actionBar";
import FloatingAddButton from "./addButton";
import SimpleCard from "./card";
import CustomizedInputBase from "./customizedInput";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Toolbar} from "@material-ui/core";

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import ElevateAppBar from "./elevate";
import {QuestionProvider} from "./contexts/Question.context";


const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '2px 4px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyItems: "center"
        // width: 400,
        // position: "absolute",
    },
    root2: {
      // alignItems: "center",
      // justifyItems: "center",
      //   height: "100vh",
      //   width: "80vw",

    },
    input: {
        marginLeft: theme.spacing(1),
        alignItems: "center",
        right: 10,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    mainGrid: {
        // display: "flow"
        minHeight: "100vh",
        // alignSelf: "center"
        // margin: "2px",
        // maxWidth: 800,
    },
    scrollTopButton: {
        // display: "grid",
        position: 'fixed',
        marginTop: 50,
        // center: 1,
        top: theme.spacing(4)
        // bottom: theme.spacing(4),
        // right: theme.spacing(8),
    }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.scrollTopButton}>
                {children}
            </div>
        </Zoom>
    );
}

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function App() {
    const classes = useStyles();

  return (
      <QuestionProvider>
          <div className={classes.root}>
              {/*<ElevateAppBar />*/}
              {/*<ElevateAppBar >*/}
              {/*    <ActionBar/>*/}
              {/*</ElevateAppBar>*/}
              <Grid container className={classes.root2} style={{ minHeight: "100vh"}}
                    alignItems={"center"} direction={"column"}>
                  <ElevationScroll >
                      <ActionBar/>

                      {/*<CustomizedInputBase className={classes.input}/>*/}
                      {/*<SimpleCard />*/}
                  </ElevationScroll>
                  <Toolbar />
                  <Toolbar id="back-to-top-anchor" />
                  <Grid item xs={12} md={12} lg={12} className={classes.mainGrid} spacing={0} >
                      <SimpleCard />
                      <SimpleCard />
                      <SimpleCard />
                      <SimpleCard />
                      <SimpleCard />
                      <SimpleCard />
                  </Grid>
                  <ScrollTop>
                      <Fab color="secondary" size="small" aria-label="scroll back to top">
                          <KeyboardArrowUpIcon />
                      </Fab>
                  </ScrollTop>
              </Grid>

              {/*<FloatingAddButton />*/}
          </div>
      </QuestionProvider>
  );
}

export default App;
