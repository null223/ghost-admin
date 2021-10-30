import { useState } from 'react';

import styled from 'styled-components';

import { Autocomplete, TextField } from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';

import useProducts from '@/hooks/useProducts';

const filter = createFilterOptions();

export const Editor = () => {
  const { data, handleCreateProduct } = useProducts();
  const [value, setValue] = useState('');
  console.log(value);

  if (!data) return <></>;

  return (
    <StEditor>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.name
          );
          if (inputValue !== '' && !isExisting) {
            // console.log(inputValue);
            filtered.push({
              inputValue,
              name: `"${inputValue}"を追加する`,
              onClick: () => handleCreateProduct(inputValue),
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={data}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(props, option) => (
          <li
            {...props}
            onClick={(e) => {
              props.onClick(e);
              if (option.onClick) option.onClick();
            }}
          >
            {option.name}
          </li>
        )}
        renderInput={(params) => {
          // console.log(params);
          return <TextField {...params} label="案件名" />;
        }}
      />
    </StEditor>
  );
};

export default Editor;

const StEditor = styled.div``;
