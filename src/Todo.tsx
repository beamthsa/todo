import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  theme => ({
    container: {
      paddingTop: theme.spacing(16),
    },
  }),
  {
    name: 'Todo'
  }
)

function Todo() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center">
        TODO
      </Typography>
    </Container>
  );
}

export default Todo;
