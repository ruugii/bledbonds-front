interface ImputProps {
    label: string;
    value: string;
    type?: string;
    isValueValid?: boolean;
    onChange: (value: string) => void;
}

export default function Imput(props: ImputProps) {
    const { label, value, onChange } = props;
    return (
        <div className="flex flex-col">
            <label className="text-palette-11">{label}</label>
            <input
                type={props.type || 'text'}
                className={`text-palette-7 p-2 rounded-lg border-solid border-2 ${props.isValueValid ? 'border-palette-7' : 'border-red-500'} w-full mb-3`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}