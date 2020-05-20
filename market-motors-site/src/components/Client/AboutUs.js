import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    minHeight: 300,
    padding: theme.spacing(8, 0, 6),
  }
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container>
          <h1>About Us</h1>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            We are a car dealership!
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            If you want to buy a squid, don't come here.  If you want to buy a car, do come here!
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;