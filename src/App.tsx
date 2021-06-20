import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            TODO
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
