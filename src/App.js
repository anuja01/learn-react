import React from 'react';
// import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  tt: {
    color: 'yellow',
    '&:disabled': {
      color: 'red'
    }
  },
  tt2: {
    color: 'red !important',
  },
   tt3: {
    color: 'blue !important',

  }
};

function App(props) {
    const [isDisable, setIsDisable] = React.useState(false);
    const { classes, children, className, ...other } = props;
    const handleChange = () => {
        setIsDisable(!isDisable);
    }
  return (
    <>
        <Checkbox 
            onChange={handleChange}
        />
        <Button variant="contained" color={isDisable ? 'primary': 'secondary'} disabled={!isDisable} className={classes.tt}>
        <p style={{color: "inherit"}}>Hello World</p>
        </Button>
    </>
  );
}
export default withStyles(styles)(App);