import EyeClose from "@/app/Icons/eyeClose";
import EyeOpen from "@/app/Icons/eyeOpen";
import { alpha, InputBase, OutlinedInputProps, styled, TextField, TextFieldProps } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useState } from "react";

interface InputProps {
  readonly label: string;
  readonly value: string | null;
  readonly type?: string;
  readonly isValueValid?: boolean;
  readonly onChange: (value: string) => void;
  readonly divClassName?: string;
  readonly id?: string;
  readonly text?: boolean;
  readonly file?: boolean;
  readonly disabled?: boolean;
  readonly mui?: boolean;
  readonly password?: boolean;
  readonly date?: boolean;
}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#002b33',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0093a1',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFF',
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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#F3F6F9',
    border: '1px solid',
    borderColor: '#E0E3E7',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    slotProps={{
      input: { disableUnderline: true } as Partial<OutlinedInputProps>,
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    border: '1px solid',
    backgroundColor: '#F3F6F9',
    borderColor: '#E0E3E7',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});

export default function Input({
  label,
  value,
  type = 'text',
  isValueValid = true,
  onChange,
  divClassName = '',
  id,
  text = false,
  file = false,
  disabled = false,
  mui = false,
  password = false,
  date = false,
}: InputProps) {
  const commonClassNames = `p-2 rounded-lg border-solid border-2 w-full mb-3 focus:outline-none bg-transparent ${isValueValid
    ? 'border-palette-600 text-palette-600 hover:border-palette-700 hover:text-palette-700 focus:border-palette-800 focus:text-palette-800 disabled:border-palette-300 disabled:text-palette-300 dark:disabled:border-palette-900 dark:disabled:text-palette-900'
    : 'border-red-500 text-red-500 focus:border-red-500'
    }`;

  const [showPassword, setShowPassword] = useState(false);

  let inputElement;
  if (text) {
    inputElement = (
      <textarea
        className={commonClassNames}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        disabled={disabled}
      />
    );
  } else if (file) {
    inputElement = (
      <input
        type="file"
        className={commonClassNames}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        disabled={disabled}
      />
    );
  } else if (mui) {
    if (password) {
      return (
        <CssTextField
          label={label}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          id={id}
          disabled={disabled}
          fullWidth
          error={!isValueValid}
          autoComplete="off"
          className={`mb-3 ${divClassName}`}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOpen /> : <EyeClose />}
              </div>
            )
          }}
        />
      )
    } else if (date) {
      return (
        <CssTextField
          label={label}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          id={id}
          disabled={disabled}
          fullWidth
          error={!isValueValid}
          autoComplete="off"
          className={`mb-3 ${divClassName}`}
          type={type}
        />
      )
    } else {
      return (
        <div className={`mb-3 ${divClassName}`}>
            <CssTextField
              label={label}
              value={value ?? ''}
              onChange={(e) => onChange(e.target.value)}
              id={id}
              disabled={disabled}
              fullWidth
              error={!isValueValid}
              autoComplete={id === 'user' ? "on" : "off"}
            />
        </div>
      )
    }
  } else {
    inputElement = (
      <input
        type={type}
        className={commonClassNames}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        disabled={disabled}
      />
    );
  }

  return (
    <div className={`flex flex-col ${divClassName}`}>
      <label className="text-palette-11 dark:text-palette-1">
        {label}
        {inputElement}
      </label>
    </div>
  );
}
