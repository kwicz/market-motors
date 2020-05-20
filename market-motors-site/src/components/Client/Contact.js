import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Map from './Map';
import List from '@material-ui/core/List';

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
                <List>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Office Hours:
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Monday - Friday: 10 - 6
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Saturday: 10 - 2
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Sunday: closed
                  </Typography>
                </List>  
              </div>
            </Grid>  
          </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Contact;