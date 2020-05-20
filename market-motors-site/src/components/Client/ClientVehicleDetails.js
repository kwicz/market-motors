import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '50%',
    maxWidth: '75%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingLeft: '56.25%', // 16:9
  }
}));


function VehicleDetails() {
  const classes = useStyles();
  const theme = useTheme();

  const vehicle = useSelector(state => state.selectedVehicle);
  const { vehicleTitle, vin, condition, price, availability, exteriorColor, interiorColor, doors, fuelType, engine, transmission, mileage, features } = vehicle;


  return (
    <React.Fragment>
      <br />
      <MuiThemeProvider theme={theme}>
        <Container className={classes.root}>
          <Paper elevation={3}>
            <CardHeader
              title={vehicleTitle}
              style={{ textAlign: 'center'}}
            />
            <Grid container>
              <Grid item xs={12} sm={6}>
                <br />
                <br />
                <CardMedia
                  className={classes.media}
                  image="https://source.unsplash.com/random"
                  title={vehicleTitle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <List dense="dense">
                      <ListItem>Vin: {vin}</ListItem>
                      <ListItem>Condition: {condition}</ListItem>
                      <ListItem>Price: ${price}.00</ListItem>
                      <ListItem>Availability: {availability}</ListItem>
                      <ListItem>ExteriorColor: {exteriorColor}</ListItem>
                      <ListItem>InteriorColor: {interiorColor}</ListItem>
                      <ListItem>Doors: {doors}</ListItem>
                      <ListItem>Fuel Type: {fuelType}</ListItem>
                      <ListItem>Engine: {engine}</ListItem>
                      <ListItem>Transmission: {transmission}</ListItem>
                      <ListItem>Mileage: {mileage}</ListItem>
                    </List>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
            <CardContent>
              <Typography paragraph>
                Additional Vehicle Features: {features}
              </Typography>
            </CardContent>
          </Paper>
          <br />
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default VehicleDetails;