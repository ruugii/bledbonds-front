interface DropdownProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
    isValueValid?: boolean;
}

export default function Dropdown(props: DropdownProps) {
    const { label, value, options, onChange } = props;
    return (
        <div className="flex flex-col">
            <label className="text-palette-11">{label}</label>
            <select
                className={`p-2 rounded-lg border-solid border-2 w-full mb-3 ${props.isValueValid ? 'text-palette-7 border-palette-7' : 'text-red-500 border-red-500'} focus:outline-none`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}