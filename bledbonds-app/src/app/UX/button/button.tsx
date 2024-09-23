import MuiButton from "../MuiButton/MuiButton";

interface ButtonProps {
  label?: string;
  onClick: () => any;
  children?: any;
  className: string;
  noBorder?: boolean;
  disabled?: boolean;
  mui?: boolean;
  href?: string;
}

export default function Button(props: Readonly<ButtonProps>) {

  const getChildren = () => {
    // props.label ? props.label : props.children ? props.children : "Button"
    if (props.label) {
      return props.label;
    } else if (props.children) {
      return props.children;
    } else {
      return "Button";
    }
  }

  if (props.mui) {
    return (
      <MuiButton
        onClick={props.onClick}
        className={props.className}
        noBorder={props.noBorder}
        disabled={props.disabled}
        href={props.href}
      >
        {getChildren()}
      </MuiButton>
    )
  } else {
    return (
      <button className={`bg-palette-500 hover:bg-palette-600 active:bg-palette-700 disabled:bg-palette-100 dark:disabled:bg-palette-950 text-palette-950 disabled:text-palette-400 dark:disabled:text-palette-700 border-solid border-2 border-palette-500 hover:border-palette-600 active:border-palette-700 disabled:border-palette-100 dark:disabled:border-palette-900 p-2 rounded-lg ${props.noBorder ? 'mb-0' : 'mb-3'} ${props.className}`} onClick={() => { props.onClick() }} disabled={props.disabled ? props.disabled : false}>
        {getChildren()}
      </button>
    );
  }

}