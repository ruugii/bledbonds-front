import { styled } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface MuiDatePickerProps {
  readonly label: string;
  readonly value: Dayjs | null;
  readonly onChange: (value: Dayjs | null) => void;
  readonly error?: boolean;
}

const CssTextFieldError = styled(DatePicker)({
  '& label.MuiFormLabel-root': {
    color: 'red',
  },
  '& label.Mui-focused': {
    color: 'red',
  },
  '& .MuiOutlinedInput-root': {
    '& MuiInputBase-input': {
      color: 'red',
    },
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

const CssTextField = styled(DatePicker)({
  '& label.Mui-focused': {
    color: '#002b33',
  },
  '& .MuiOutlinedInput-root': {
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

export default function MuiDatePicker(props: Readonly<MuiDatePickerProps>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {props.error ? (
        <CssTextFieldError
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          className="w-full"
          format="DD-MM-YYYY"
          views={['year', 'month', 'day']}
          slotProps={{
            textField: {
              autoComplete: 'date-picker-custom-erro', // Disable browser autocomplete
              inputProps: {
                autoComplete: 'date-picker-custom-erro', // Fully disable additional suggestions
                id: 'date-picker-custom-error', // Unique id
                name: 'date-picker-custom-error', // Unique name
              },
            },
          }}
          disableFuture
        />
      ) : (
        <CssTextField
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          className="w-full"
          format="DD-MM-YYYY"
          views={['year', 'month', 'day']}
          slotProps={{
            textField: {
              autoComplete: 'nope', // Disable browser autocomplete
              inputProps: {
                autoComplete: 'nope', // Fully disable additional suggestions
                id: 'date-picker-custom', // Unique id
                name: 'date-picker-custom', // Unique name
              },
            },
          }}
          disableFuture
        />
      )}
    </LocalizationProvider>
  );
}
