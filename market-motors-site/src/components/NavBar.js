import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root}>
      <AppBar style={{ background: '#003300' }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Market Motors
          </Typography>
          <Button color="inherit">See All Inventory</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
