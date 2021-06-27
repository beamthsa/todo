import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput, { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import KeyboardReturnRoundedIcon from '@material-ui/icons/KeyboardReturnRounded';

interface TodoInputProps {
  onSubmit?: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const onClear = () => setValue('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (value !== '') {
      onSubmit?.(value);
      onClear();
    } else {
      setError(true);
    }
  };

  const handleChange: OutlinedInputProps['onChange'] = (event) => {
    const { value } = event.target;

    if (value !== '') {
      setError(false);
    }

    setValue(value);
  };

  return (
    <FormControl
      variant="outlined"
      component="form"
      onSubmit={handleSubmit}
      fullWidth>
      <OutlinedInput
        placeholder="(name)"
        value={value}
        error={error}
        onChange={handleChange}
        endAdornment={
          value.length > 0 && (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                color="primary"
                aria-label="add to to-do list">
                <KeyboardReturnRoundedIcon />
              </IconButton>
            </InputAdornment>
          )}
      />
    </FormControl>
  )
}

export default TodoInput;
