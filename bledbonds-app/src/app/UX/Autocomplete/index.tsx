import { Autocomplete, AutocompleteChangeDetails, styled } from "@mui/material";

interface AutocompleteProps {
  readonly options: { value: string, label: string }[];
  readonly getOptionLabel: (option: any) => string;
  readonly filterOptions: (options: any[], state: any) => any[];
  readonly sx: any;
  readonly renderInput: (params: any) => JSX.Element;
  readonly onChange: (event: any, value: any, reason: any, details?: AutocompleteChangeDetails<unknown> | undefined) => void;
  readonly value: string;
  readonly error: boolean;
}

const StyledAutocompleteError = styled(Autocomplete)({
  '& .MuiFormLabel-root': {
    color: 'red',
  },
  '& label.Mui-focused': {
    color: 'red',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'red',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'red',
    },
  },
});

const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiFormLabel-root': {
    color: '#0093a1',
  },
  '& label.Mui-focused': {
    color: '#0093a1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0093a1',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    '& fieldset': {
      borderColor: '#0093a1',
    },
    '&:hover fieldset': {
      borderColor: '#0093a1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0093a1',
    },
  },
});

export default function AutocompleteMUI(props: AutocompleteProps) {
  if (props.error) {
    return (
      <StyledAutocompleteError
        options={props.options}
        getOptionLabel={props.getOptionLabel}
        renderInput={(params) => props.renderInput({
          ...params,
          InputProps: {
            ...params.InputProps,
            className: 'text-palette-950 dark:text-palette-50', // Apply custom class here
          },
        })}
        sx={props.sx}
        filterOptions={props.filterOptions}
        onChange={props.onChange}
        value={props.value}
      />
    );
  } else {
    return (
      <StyledAutocomplete
        options={props.options}
        getOptionLabel={props.getOptionLabel}
        filterOptions={props.filterOptions}
        sx={props.sx}
        renderInput={(params) => props.renderInput({
          ...params,
          InputProps: {
            ...params.InputProps,
            className: 'text-palette-950 dark:text-palette-50', // Apply custom class here
          },
        })}
        onChange={props.onChange}
        value={props.value}
      />
    );
  }
}
