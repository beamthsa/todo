import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { Todo } from '../../types/todo.d'; 

export interface TodoListProps {
  data: Todo[];
  onDelete: (id: string) => void;
  activeIds: string[];
  onToggle: (id: string) => void;
}

const useStyles = makeStyles(
  theme => ({
    buttonDelete: {
      '&:hover': {
        color: theme.palette.error.main,
      }
    },
    activeText: {
      textDecoration: 'line-through',
    },
  }),
  {
    name: 'TodoList',
  }
);

const TodoList: React.FC<TodoListProps> = (props) => {
  const { data, activeIds, onDelete, onToggle } = props;
  const classes = useStyles();

  const handleToggle = (value: string) => () => {
    onToggle(value);
  };

  const handleDelete = (value: string) => () => {
    onDelete(value);
  };

  return (
    <List>
      {data.map(value => {
        const { id: currentId, name = 'N/A' } = value;
        const labelId = `checkbox-label-${currentId}`;
        const isActive = activeIds.includes(currentId);

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
                checked={isActive}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>

            <ListItemText
              className={classNames({
                [classes.activeText]: isActive,
              })}
              id={labelId}
              primary={name} />

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
