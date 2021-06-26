import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Todo as TodoData } from '../../types/todo.d';

export default function useTodo() {
  const [data, setData] = useState<TodoData[]>([]);
  const [activeIds, setActiveIds] = useState<string[]>([]);

  function addTodo(value: string) {
    const newValue = {
      id: uuidv4(),
      name: value,
    };

    setData(currentValue => [
      ...currentValue,
      newValue,
    ]);

    return newValue;
  }

  function removeTodo(id: string) {
    const targetIndex = data.findIndex(value => value.id === id);

    if (targetIndex > -1) {
      const newValue = [...data];
      newValue.splice(targetIndex, 1);

      setData(newValue);
    }

    const currentIndex = activeIds.indexOf(id);
    const newIds = [...activeIds];

    if (currentIndex > -1) {
      newIds.splice(currentIndex, 1);
      setActiveIds(newIds);
    }
  }

  function toggleTodo(id: string) {
    const currentIndex = activeIds.indexOf(id);
    const newIds = [...activeIds];

    if (currentIndex === -1) {
      newIds.push(id);
    } else {
      newIds.splice(currentIndex, 1);
    }

    setActiveIds(newIds);
  }

  return {
    data,
    addTodo,
    removeTodo,

    activeIds,
    toggleTodo,
  }
}
