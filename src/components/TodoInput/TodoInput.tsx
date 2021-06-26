import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import KeyboardReturnRoundedIcon from '@material-ui/icons/KeyboardReturnRounded';

interface TodoInputProps {
  onSubmit?: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('')
  const onClear = () => setValue('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit?.(value)
    onClear()
  }

  return (
    <FormControl
      variant="outlined"
      component="form"
      onSubmit={handleSubmit}
      fullWidth>
      <OutlinedInput
        placeholder="(name)"
        value={value}
        onChange={event => setValue(event.target.value)}
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
