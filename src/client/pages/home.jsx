/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
// import { Favorite, OpenInNew } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Github from '../styles/icons/github';

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
  buttonIcon: {
    marginRight: theme.spacing.unit,
  },
  jumbotron: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    padding: '50px',
  },
  jumbotronButton: {
    marginRight: theme.spacing.unit,
  },
});

const Home = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Boilerplate
          </Typography>
          <Link to="/console" className={classes.link}><Button variant="flat" color="secondary">Pricing</Button></Link>
          <Button variant="raised" color="secondary">
            go to console
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container spacing={16} className={classes.jumbotron}>
          <Grid item xs={12}>
            <Typography variant="display1" color="secondary">
              One SPA boilerplate code to rule them all! {process.env.API_URL}
            </Typography>
            <p>
              <Typography variant="headline" color="inherit">
                Use this project to develop your Single Page Applications.
                <br />
                Powered by React + Material-ui.
                <br />
                Made with <Github fontSize="inherit" color="secondary" /> in São Paulo, Brazil.
              </Typography>
            </p>
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="raised" color="secondary" className={classes.jumbotronButton}>
              <Github className={classes.buttonIcon} />
              boilerplate API
            </Button>
            <a
              href="https://github.com/ataquino/boiletplate-spa-frontend"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <Button variant="outlined" color="secondary">
                <Github className={classes.buttonIcon} />
                view source code
              </Button>
            </a>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
