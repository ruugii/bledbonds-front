import { Button } from "@mui/material";

interface ButtonProps {
  onClick: () => any;
  children?: any;
  className: string;
  noBorder?: boolean;
  disabled?: boolean;
  href?: string;
}

export default function MuiButton(props: Readonly<ButtonProps>) {

  return (
    <Button
      onClickCapture={() => {
        console.log('bbb');
        props.onClick()
      }}
      className={`bg-palette-500 hover:bg-palette-600 active:bg-palette-700 disabled:bg-palette-100 dark:disabled:bg-palette-950 text-palette-950 disabled:text-palette-400 dark:disabled:text-palette-700 border-solid border-2 border-palette-500 hover:border-palette-600 active:border-palette-700 disabled:border-palette-100 dark:disabled:border-palette-900 p-2 ${props.noBorder ? 'mb-0' : 'mb-3'} ${props.className}`} onClick={() => { props.onClick() }} disabled={props.disabled ? props.disabled : false} href={props.href}>
      {props.children}
    </Button>
  )
}