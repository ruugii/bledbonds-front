'use client'

import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

interface LinkProps {
  href: string;
  children: any;
  className?: string;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#002b33',
  backgroundColor: '#04bbc8',
  padding: '0.5rem',
  '&:hover': {
    backgroundColor: '#0093a1',
  },
  '&:active': {
    backgroundColor: '#057480',
  }
}));

export default function Link (props: Readonly<LinkProps>) {
  return (
    <ColorButton
      variant="contained"
      href={props.href}
      className={`${props.className} text-palette-950 bg-palette-500 hover:bg-palette-600 active:bg-palette-700 disabled:bg-palette-100 disabled:text-palette-400 disabled:dark:bg-palette-950 disabled:dark:text-palette-700`}
      fullWidth
    >
      {props.children}
    </ColorButton>
  )
}