interface TitleProps {
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  width?: boolean;
  grid?: boolean;
  center?: boolean;
}

export default function Title(props: TitleProps) {
  const {
    className,
    children,
    bold,
    width,
    grid,
    center
  } = props;
  return (
    <h1 className={`text-4xl ${bold && 'font-bold'} text-palette-11 mt-3 ${width && 'md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%]'} ${grid && 'grid grid-cols-1'} ${center && 'md:text-center text-left'} ${className}`}>
      {children}
    </h1>
  )
}