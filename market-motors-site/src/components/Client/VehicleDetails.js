import React from 'react';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme/muiTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 500,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cover: {
    width: 300,
  },
}));

function VehicleDetails() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <MuiThemeProvider>
        <Container>
        <h1>VehicleDetails</h1>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image="https://source.unsplash.com/random"
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Vehicle Title
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Price
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default VehicleDetails;