import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import theme from '../../theme/muiTheme'

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
  const { vehicleId, vehicleTitle, vin, stockNumber, make, model, year, condition, price, availability, exteriorColor, interiorColor, doors, fuelType, engine, transmission, mileage, features } = vehicle;

  const subheader = <CardActionArea>
    <Button><Link to="/editvehicleform">Edit This Vehicle</Link></Button>
    <Button onClick={updateVehicle}>Mark As Sold</Button>
    <Button onClick={deleteVehicle(vehicleId)}>Remove From Inventory</Button>
    </CardActionArea>

  async function deleteVehicle(id) {
    await fetch(`http://localhost:5000/api/vehicles/${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
  }

  async function updateVehicle(id) {
    await fetch(`http://localhost:5000/api/vehicles/${id}`,{
      method: 'PUT'
    })
    .then(response => response.json())
  }


  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme} className={classes.root}>
        <Container>
          <h1>{vehicleTitle}</h1>
          <Card className={classes.root}>
            <CardHeader
              title={vehicleTitle}
              subheader={subheader}
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
                  <Typography variant="body2" color="textSecondary" component="p">
                    <List dense="dense">
                      <ListItem>Vin: {vin}</ListItem>
                      <ListItem>Stock Number: {stockNumber}</ListItem>
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
          </Card>
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default VehicleDetails;