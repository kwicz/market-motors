import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import * as a from '../../actions'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import theme from '../../theme/muiTheme'


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

function FeaturedVehicles() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const vehicles = useSelector(state => state.vehiclesAPICall.vehicles)
  console.log("FEATURED VEHICLES", vehicles)
  // const vehiclesToFeature = [vehicles[0], vehicles[1], vehicles[2]]
  // console.log("vehicles to feature: ", vehiclesToFeature)
  
  function handleVehicleClick(vehicle) {
    const action = a.selectedVehicle(vehicle.vehicle)
    dispatch(action);
  }

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Container className={classes.cardGrid}>
          <h1>Featured Vehicles</h1>
          <Grid container spacing={4}>
            {vehicles.map((vehicle) => (
              <Grid item key={vehicle.vehicleId} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {vehicle.vehicleTitle}
                    </Typography>
                    <Typography>
                      {vehicle.mileage} miles
                    </Typography>
                    <Typography>
                      ${vehicle.price}.00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link onClick={() => {handleVehicleClick({vehicle});}} to="/vehicledetails" >
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default FeaturedVehicles;