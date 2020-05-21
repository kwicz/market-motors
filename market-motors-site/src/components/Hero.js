import React from 'react';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import HeaderImage from '../assets/mktmtrsbanner.jpg'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import theme from '../theme/muiTheme'


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundSize: 'cover',
    minHeight: 300,
    padding: theme.spacing(8, 0, 6),
  }
}));



function Hero() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
      <div className={classes.heroContent}></div>
      <br />
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button href="/vehicles" variant="contained" color="primary">
            See Current Inventory
          </Button>
        </Grid>
      </Grid>
      </MuiThemeProvider>  
    </React.Fragment>
  );
}

export default Hero;