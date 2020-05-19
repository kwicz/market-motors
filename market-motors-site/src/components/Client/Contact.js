import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Map from './Map';


// const useStyles = makeStyles((theme) => ({
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     minHeight: 300,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   }
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <h1>Contact Us</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Map />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.heroContent}>
                  <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
                    (574) 875-9700
                  </Typography>
                  <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
                    23785 US 33 Elkhart, IN
                  </Typography>
                  <hr />
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Office Hours:
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    <p>Monday - Friday: 10 - 6</p>
                    <p>Saturday: 10 - 2</p>
                    <p>Sunday: closed</p>
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
              </div>
            </Grid>  
          </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Contact;