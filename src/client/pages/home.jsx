/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import GithubCircle from 'mdi-material-ui/GithubCircle';

const styles = theme => ({
  root: {
    overflow: 'hidden',
  },
  flex: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
  buttonIcon: {
    marginRight: theme.spacing.unit,
  },
  appbar: {
    transitionProperty: 'box-shadow',
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    transitionDuration: `${theme.transitions.duration.short}ms`,
  },
  appbarButtonLink: {
    marginRight: theme.spacing.unit,
  },
  noshadow: {
    boxShadow: theme.shadows[0],
  },
  withshadow: {
    boxShadow: theme.shadows[2],
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

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      appbarClass: 'noshadow',
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({
        appbarClass: window.scrollY > 0 ? 'withshadow' : 'noshadow',
      });
    };
  }

  render() {
    const { classes } = this.props;
    const { appbarClass } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="sticky" className={`${classes.appbar} ${classes[appbarClass]}`}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Boilerplate
            </Typography>
            <a
              href="#pricing"
              rel="noopener noreferrer"
              className={`${classes.link} ${classes.appbarButtonLink}`}
            >
              <Button variant="flat" color="secondary">Pricing</Button>
            </a>
            <Link to="/console" className={classes.link}>
              <Button variant="raised" color="secondary">
                go to console
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <main className={classes.root}>
          <Grid container spacing={16} className={classes.jumbotron}>
            <Grid item xs={12}>
              <Typography variant="display1" color="secondary">
                One SPA boilerplate code to rule them all!
              </Typography>
              <Typography variant="headline" color="inherit">
                <p>
                  Use this project to develop your Single Page Applications.
                  <br />
                  Powered by React + Material-ui.
                  <br />
                  Made with <Favorite fontSize="inherit" color="secondary" /> in São Paulo, Brazil.
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="raised" color="secondary" className={classes.jumbotronButton}>
                <OpenInNew className={classes.buttonIcon} />
                boilerplate API
              </Button>
              <a
                href="https://github.com/ataquino/boiletplate-spa-frontend"
                rel="noopener noreferrer"
                target="_blank"
                className={classes.link}
              >
                <Button variant="outlined" color="secondary">
                  <GithubCircle className={classes.buttonIcon} />
                  view source code
                </Button>
              </a>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
