import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  listInline: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    color: 'white',
  }
}));



const PageBase = ({ children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  return (
    <div>
      <h1>header</h1>
      <AppBar>
        <Toolbar>
          <List className={classes.listInline} component="nav">
            <ListItem button component={Link} selected={pathname === '/'} to="/">
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button component={Link} selected={pathname === '/favorite'} to="/favorite">
              <ListItemText>Favorite</ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>


      <div>{children}</div>
    </div>
  );
};


PageBase.defaultProps = {
  children: null,
};

PageBase.propTypes = {
  children: PropTypes.node,
};

export default PageBase;
