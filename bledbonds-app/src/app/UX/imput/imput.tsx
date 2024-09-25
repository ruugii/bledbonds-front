import EyeClose from "@/app/Icons/eyeClose";
import EyeOpen from "@/app/Icons/eyeOpen";
import useStyle from "@/app/utilities/style";
import { styled, TextField, useTheme } from "@mui/material";
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

const CssTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: '#0093a1',
  },
  '& .MuiFormLabel-root.Mui-error': {
    color: 'red',
  },
  '& label.Mui-focused': {
    color: '#0093a1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0093a1',
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
    '&.Mui-error fieldset': {
      borderColor: 'red',
    },
  },
}));

const CssTextFieldError = styled(TextField)(({ theme }) => ({
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
}));

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
  const [showPassword, setShowPassword] = useState(false);

  const commonClassNames = `p-2 rounded-lg border-solid border-2 w-full mb-3 focus:outline-none bg-transparent ${isValueValid
    ? 'border-palette-600 text-palette-600 hover:border-palette-700 hover:text-palette-700 focus:border-palette-800 focus:text-palette-800 disabled:border-palette-300 disabled:text-palette-300 dark:disabled:border-palette-900 dark:disabled:text-palette-900'
    : 'border-red-500 text-red-500 focus:border-red-500'
    }`;

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
          autoComplete="off"
          className={`mb-3 ${divClassName}`}
          type={showPassword ? 'text' : 'password'}
          error={!isValueValid}
          slotProps={{
            input: {
              className: 'text-palette-950 dark:text-palette-50',
              endAdornment: (
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOpen /> : <EyeClose />}
              </div>
              )
            },
            
          }}
        />
      );
    } else if (date) {
      return (
        <CssTextField
          label={label}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          id={id}
          disabled={disabled}
          fullWidth
          type={type}
          error={!isValueValid}
          className={`mb-3 ${divClassName}`}
        />
      );
    } else {
      return (
        <CssTextField
          label={label}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          id={id}
          disabled={disabled}
          fullWidth
          autoComplete={id === 'email' ? "on" : "off"}
          error={!isValueValid}
          className={`mb-3 ${divClassName}`}
          slotProps={{
            input: {
              className: 'text-palette-950 dark:text-palette-50'
            }
          }}
        />
      );
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
