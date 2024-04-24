interface ButtonProps {
    label: string;
    onClick: () => any;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="bg-palette-7 text-palette-11 p-2 rounded-lg border-solid border-2 border-palette-7 w-full mb-3" onClick={() => {
            props.onClick()
        }}>
            {props.label}
        </button>
    );
}