import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import theme from '../theme/muiTheme'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));


function VehicleDetails() {
  const classes = useStyles();
  const theme = useTheme();

  const vehicle = useSelector(state => state.selectedVehicle);

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme} className={classes.root}>
        <Container>
          <h1>{vehicle.vehicleTitle}</h1>
          <Card className={classes.root}>
            <CardHeader
              title={vehicle.vehicleTitle}
              subheader={vehicle.Price}
            />
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
              title={vehicle.vehicleTitle}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
          </Card>
        </Container>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default VehicleDetails;