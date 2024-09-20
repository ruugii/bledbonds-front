interface ImputProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly divClassName?: string;
  readonly id?: string;
}

export default function TextArea(props: ImputProps) {

  const { label, value, onChange } = props;

  return (
    <div className={`flex flex-col ${props.divClassName}`}>
      <label className="text-palette-11">
        {label}
        <textarea
          className={`p-2 rounded-lg border-solid border-2 w-full mb-3 focus:outline-none bg-palette-1`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          id={props.id}
        />
      </label>
    </div>
  )
}