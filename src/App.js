import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from './routes/List';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box my={4}>
          <Router>
            <Switch>
              <Route path="/">
                <List />
              </Route>
            </Switch>
          </Router>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
