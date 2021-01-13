import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';

const styles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar style={{background: 'darkred'}} position="static">
        <Toolbar>
          <Typography 
          variant="h4" 
          color="inherit" 
          align="center"
          >
            EmojiPictonary
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);

