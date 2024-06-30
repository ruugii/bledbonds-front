interface ButtonProps {
  label?: string;
  onClick: () => any;
  children?: any;
  className: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={`bg-palette-7 text-palette-11 p-2 rounded-lg border-solid border-2 border-palette-7 mb-3 ${props.className}`} onClick={() => { props.onClick() }}>
      {props.label ? props.label : props.children ? props.children : "Button"}
    </button>
  );
}