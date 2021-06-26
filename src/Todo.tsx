import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import TodoInput from './components/TodoInput';
import TodoList, { TodoListProps } from './components/TodoList';
import { Todo as TodoData } from './types/todo.d'; 

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
    console.log(value);
  };

  const handleChange: TodoListProps['onChange'] = (ids) => {
    console.log(ids);
  };

  const data: TodoData[] = [
    {id: '1b3b1734-5ca3-4ec6-b5d2-d32131b9fffd', name: 'Shawn'},
    {id: '7784bf74-366d-4b94-a459-2e615f7756d8', name: 'National Marketing Officer'}
  ]

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center">
        TODO
      </Typography>

      <div className={classes.inputContainer}>
        <TodoInput onSubmit={onSubmit} />
      </div>

      <TodoList
        onChange={handleChange}
        data={data} />
    </Container>
  );
}

export default Todo;
