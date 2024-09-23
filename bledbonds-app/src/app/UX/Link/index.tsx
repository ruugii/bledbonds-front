import { Button } from "@mui/material";

interface LinkProps {
  href: string;
  children: any;
  className?: string;
}

export default function Link (props: Readonly<LinkProps>) {

  return (
    <Button
      variant="contained"
      href={props.href}
      className={`${props.className}`}
    >
      {props.children}
    </Button>
  )
}