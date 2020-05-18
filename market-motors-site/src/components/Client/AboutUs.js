import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    minHeight: 300,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
            Saying stuff about the car dealership.
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            More Stuff about the Car Dealership
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                {/* <Button variant="contained" color="primary">
                  Main call to action
                </Button> */}
              </Grid>
              <Grid item>
                {/* <Button variant="outlined" color="primary">
                  Secondary action
                </Button> */}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;