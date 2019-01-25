import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  CssBaseline,
  Drawer,
  Typography,
  Grid,
  TextField,
  Fade,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    background: theme.palette.primary.main,
  },
  infoPanel: {
    marginRight: 512,
    color: theme.palette.common.white,
  },
  heading: {
    fontWeight: 100,
    fontSize: theme.typography.pxToRem(theme.typography.fontSize * 3),
  },
  loginDrawerPaper: {
    width: 512,
  },
  form: {
    flexGrow: 1,
  },
  textField: {
    width: 320,
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Fade in timeout={2000}>
          <Grid container direction="column" className={classes.infoPanel} justify="center" spacing={32}>
            <Grid item>
              <Typography
                align="center"
                variant="display1"
                color="secondary"
                className={classes.heading}
              >
                Boilerplate is the best shampoo contra a caspa in the world
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="center"
                variant="display1"
                color="inherit"
              >
                NANI!?
              </Typography>
            </Grid>
          </Grid>
        </Fade>
        <Drawer
          variant="permanent"
          anchor="right"
          classes={{
            paper: classes.loginDrawerPaper,
          }}
        >
          <Grid container direction="column" justify="center" component="form" className={classes.form}>
            <Grid item align="center">
              <TextField
                id="username"
                label="Username or E-mail"
                className={classes.textField}
                margin="normal"
                value={username}
                onChange={this.handleChange('username')}
              />
            </Grid>
            <Grid item align="center">
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                margin="normal"
                value={password}
                onChange={this.handleChange('password')}
              />
            </Grid>
          </Grid>
        </Drawer>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
