interface TitleProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly bold?: boolean;
  readonly width?: boolean;
  readonly grid?: boolean;
  readonly center?: boolean;
  readonly capitalize?: boolean;
  readonly mayus?: boolean;
}

export default function Title(props: TitleProps) {
  const {
    className,
    children,
    bold,
    width,
    grid,
    center,
    capitalize,
    mayus
  } = props;
  return (
    <h1 className={
      `text-4xl ${bold && 'font-bold'} text-palette-11 dark:text-palette-1 mt-3 ${width && 'md:min-w-[80vh] md:w-[80vw] min-w-[80%] w-[80%]'} ${grid && 'grid grid-cols-1'} ${center && 'md:text-center text-left'} ${className} ${capitalize && 'capitalize'} ${mayus && 'uppercase'}`}>
      {children}
    </h1>
  )
}