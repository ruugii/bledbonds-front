'use client'

import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { useEffect, useState } from "react";

interface LinkProps {
  href: string;
  children: any;
  className?: string;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'red' : '#002b33',
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
      className={`${props.className}`}
      fullWidth
    >
      {props.children}
    </ColorButton>
  )
}