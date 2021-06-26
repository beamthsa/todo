import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';

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
  const {
    data, addTodo, removeTodo,
    activeIds, toggleTodo,
  } = useTodo();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center">
        TODO
      </Typography>

      <div className={classes.inputContainer}>
        <TodoInput onSubmit={addTodo} />
      </div>

      <TodoList
        data={data}
        activeIds={activeIds}
        onDelete={removeTodo}
        onToggle={toggleTodo} />
    </Container>
  );
}

export default Todo;
