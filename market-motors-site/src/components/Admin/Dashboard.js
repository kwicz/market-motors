import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme/muiTheme'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <br />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            What do you want to do today?
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button href="newvehicle" variant="contained" color="primary">
                Add New Vehicle
              </Button>
            </Grid>
            <Grid item>
              <Button href="/vehicles" variant="contained" color="primary">
                See All Vehicles
              </Button>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    </React.Fragment>

  );
}