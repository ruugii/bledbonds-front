interface InputProps {
  label: string;
  value: string | null;
  type?: string;
  isValueValid?: boolean;
  onChange: (value: string) => void;
  divClassName?: string;
  id?: string;
  text?: boolean;
  file?: boolean;
  disabled?: boolean;
}

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
}: InputProps) {
  const commonClassNames = `p-2 rounded-lg border-solid border-2 w-full mb-3 focus:outline-none bg-transparent ${
    isValueValid
      ? 'border-palette-600 text-palette-600 hover:border-palette-700 hover:text-palette-700 focus:border-palette-800 focus:text-palette-800 disabled:border-palette-300 disabled:text-palette-300 dark:disabled:border-palette-900 dark:disabled:text-palette-900'
      : 'border-red-500 text-red-500 focus:border-red-500'
  }`;

  let inputElement;
  if (text) {
    inputElement = (
      <textarea
        className={commonClassNames}
        value={value || ''}
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
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        disabled={disabled}
      />
    );
  } else {
    inputElement = (
      <input
        type={type}
        className={commonClassNames}
        value={value || ''}
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
