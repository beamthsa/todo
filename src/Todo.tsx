import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import TodoInput from './components/TodoInput'

const useStyles = makeStyles(
  theme => ({
    container: {
      paddingTop: theme.spacing(16),
    },
    inputContainer: {
      marginTop: theme.spacing(4),
    },
  }),
  {
    name: 'Todo'
  }
)

function Todo() {
  const classes = useStyles();

  const onSubmit = (value: string) => {
    console.log(value)
  }

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center">
        TODO
      </Typography>

      <div className={classes.inputContainer}>
        <TodoInput onSubmit={onSubmit} />
      </div>
    </Container>
  );
}

export default Todo;
