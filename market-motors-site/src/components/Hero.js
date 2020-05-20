import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from '../assets/mktmtrsbanner.jpg'


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: `url(${HeaderImage})`,
    backgroundSize: 'cover',
    minHeight: 300,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));



function Hero() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}></div>
    </React.Fragment>
  );
}

export default Hero;