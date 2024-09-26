import { Button, styled } from "@mui/material";

interface ButtonProps {
  onClick: () => any;
  children?: any;
  className: string;
  noBorder?: boolean;
  disabled?: boolean;
  href?: string;
}

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#04bbc8',
  color: '#002b33',  // Use 'color' instead of 'textColor'
  '&:hover': {
    backgroundColor: '#0093a1',
  },
  '&:active': {
    backgroundColor: '#057480',
  },
}));

export default function MuiButton(props: Readonly<ButtonProps>) {
  return (
    <StyledButton
      onClick={() => {
        console.log('bbb');
        props.onClick();
      }}
      className={`bg-palette-500 hover:bg-palette-600 active:bg-palette-700 disabled:bg-palette-100 dark:disabled:bg-palette-950 text-palette-950 disabled:text-palette-400 dark:disabled:text-palette-700 border-solid border-2 border-palette-500 hover:border-palette-600 active:border-palette-700 disabled:border-palette-100 dark:disabled:border-palette-900 p-2 ${props.noBorder ? 'mb-0' : 'mb-3'} ${props.className}`}
      disabled={props.disabled}
      href={props.href}
    >
      {props.children}
    </StyledButton>
  );
}
