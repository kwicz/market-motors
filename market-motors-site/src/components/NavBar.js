import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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
  },
}));


function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar  position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/homepage">
                  Market Motors
              </Link>
            </Typography>
            <Button color="inherit">
              <Link to="/vehicles">See All Inventory</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default NavBar;
