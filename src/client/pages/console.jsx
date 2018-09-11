import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet-async';
import Route from 'react-router-dom/Route';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Home from '@material-ui/icons/Home';
import SecurityAccount from 'mdi-material-ui/SecurityAccount';
import Index from './console/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: 256,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: {
    minHeight: 48,
  },
});

const Console = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Console</title>
      </Helmet>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            Console
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <SecurityAccount />
            </ListItemIcon>
            <ListItemText primary="IAM" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Route path="/" component={Index} />
      </main>
    </div>
  );
};

Console.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Console);
