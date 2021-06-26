import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { makeStyles } from '@material-ui/core/styles';

import { Todo } from '../../types/todo.d'; 

export interface TodoListProps {
  onChange: (ids: string[]) => void;
  data: Todo[];
}

const useStyles = makeStyles(
  theme => ({
    buttonDelete: {
      '&:hover': {
        color: theme.palette.error.main
      }
    },
  }),
  {
    name: 'TodoItem'
  }
);

const TodoList: React.FC<TodoListProps> = (props) => {
  const { data, onChange } = props;
  const classes = useStyles();

  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex > -1) {
      newChecked.splice(currentIndex, 1);
      setChecked(newChecked);
    }
  }

  useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);

  return (
    <List>
      {data.map(value => {
        const { id: currentId, name = 'N/A' } = value;
        const labelId = `checkbox-label-${currentId}`;

        return (
          <ListItem
            key={value.id}
            onClick={handleToggle(currentId)}
            dense
            button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                color="primary"
                checked={checked.includes(currentId)}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>

            <ListItemText id={labelId} primary={name} />

            <ListItemSecondaryAction>
              <IconButton
                className={classes.buttonDelete}
                edge="end"
                onClick={handleDelete(currentId)}>
                <DeleteForeverRoundedIcon /> 
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}

export default TodoList;
