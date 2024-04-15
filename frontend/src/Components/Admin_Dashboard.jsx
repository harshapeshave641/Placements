
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import { Button } from 'flowbite-react';

const drawerWidth = 240;

const drawerItems = [
  { text: 'Home', link: '/companies' },
  { text: 'Statistics', link: '/stat' },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#ADD8E6', // Light blue color
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const PermanentDrawer = () => {
  const classes = useStyles();
  const handleLogout = () => {
          
    sessionStorage.removeItem('jwtToken');
    window.location.href='/'
    
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            College Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <List>
          {drawerItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
        <Button onClick={handleLogout}>
        Logout
      </Button>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
      </main>
      
    </div>
  );
};

export default PermanentDrawer;