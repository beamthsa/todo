import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Todo from './Todo';

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline/>
        <main>
          <Todo/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
