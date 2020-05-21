import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import Link from '@material-ui/core/Link'
import theme from '../theme/muiTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff'
  },
}));


function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar  position="static" className={classes.root}>
          <Toolbar>
            <Link to="/homepage" className={classes.title}>
              <Typography variant="h2" style={{ fontFamily: 'Time New Roman' }}>
                Market Motors
              </Typography>
            </Link>
            
            <Button href="/dashboard" color="inherit">
              Dashboard
            </Button>
            <Button href="/vehicles" color="inherit">
              See All Inventory
            </Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default NavBar;
