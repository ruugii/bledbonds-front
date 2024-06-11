interface ImputProps {
    label: string;
    value: string;
    type?: string;
    isValueValid?: boolean;
    onChange: (value: string) => void;
    divClassName?: string;
    id?: string;
}

export default function Imput(props: ImputProps) {
    const { label, value, onChange } = props;
    return (
        <div className={`flex flex-col ${props.divClassName}`}>
            <label className="text-palette-11">
                {label}
                <input
                    type={props.type || 'text'}
                    className={`p-2 rounded-lg border-solid border-2 ${props.isValueValid ? 'border-palette-7 text-palette-7 focus:border-palette-7' : 'border-red-500 text-red-500 focus:border-red-500'} w-full mb-3 focus:outline-none bg-palette-1`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    id={props.id}
                />
            </label>
        </div>
    );
}