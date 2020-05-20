import React from 'react';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <h1>Reusable Form</h1>
      {/* <MuiThemeProvider theme={theme} className={classes.root}>
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
      </MuiThemeProvider> */}
    </React.Fragment>
  );
}
}

export default ReusableForm;