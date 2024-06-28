interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  width?: boolean;
  grid?: boolean;
  center?: boolean;
  traking?: boolean;
  light?: boolean;
  left?: boolean;
  lg?: boolean;
  margin?: boolean;
}

export default function Subtitle(props: SubtitleProps) {
  const {
    className,
    children,
    bold,
    width,
    grid,
    center,
    traking,
    light,
    left,
    lg,
    margin
  } = props;
  return (
    <h2 className={`${bold && 'font-bold'} ${light ? 'text-palette-1' : 'text-palette-11'} ${margin ? 'mt-3' : ''} ${width && 'md:min-w-[80vw] md:w-[80vw] min-w-[80%] w-[80%]'} ${grid && 'grid grid-cols-1'} ${center && 'md:text-center text-left'} ${traking && 'tracking-tight'} ${left && 'text-left'} ${lg ? 'text-lg' : 'text-3xl'} ${className}`}>
      {children}
    </h2>
  )
}