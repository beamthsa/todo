import { useState, useMemo } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup, { ToggleButtonGroupProps } from '@material-ui/lab/ToggleButtonGroup';
import Fab from '@material-ui/core/Fab';
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
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
    resetTodo, activeIds, toggleTodo,
  } = useTodo();

  const [todoState, setTodoState] = useState< 'all' | 'active' | 'completed'>('all');
  const toggleState: ToggleButtonGroupProps['onChange'] = (_event, value) => {
    setTodoState(value);
  };

  const updatedTodo = useMemo(() => {
    if (todoState === 'all') {
      return data;
    }

    if (todoState === 'completed') {
      return data.filter(value =>  activeIds.includes(value.id));
    }

    return data.filter(value => !activeIds.includes(value.id));
  }, [data, todoState, activeIds]);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center">
        TODO
      </Typography>

      <div className={classes.inputContainer}>
        <TodoInput onSubmit={addTodo} />
      </div>

      <TodoList
        data={updatedTodo}
        activeIds={activeIds}
        onDelete={removeTodo}
        onToggle={toggleTodo} />

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center">
        <ToggleButtonGroup
          value={todoState}
          onChange={toggleState}
          size="small"
          exclusive>
          <ToggleButton value="all">
            All
          </ToggleButton>
          <ToggleButton value="active">
            Active
          </ToggleButton>
          <ToggleButton value="completed">
            Completed
          </ToggleButton>
        </ToggleButtonGroup>

        <Fab
          variant="extended"
          size="small"
          color="default"
          onClick={resetTodo}>
          <ClearAllRoundedIcon />
          Clear
        </Fab>
      </Grid>
    </Container>
  );
}

export default Todo;
