interface SectionTitleProps {
  readonly children: React.ReactNode;
  readonly bold?: boolean;
  readonly width?: boolean;
  readonly margin?: boolean;
  readonly lg?: boolean;
  readonly left?: boolean;
  readonly className?: string;
}

export default function SectionTitle(props:SectionTitleProps) {
  const {
    children,
    bold,
    width,
    margin,
    lg
  } = props;
  return (
    <h3 className={`${lg ? 'text-lg' : 'text-2xl'} ${bold && 'font-bold'} text-palette-11 dark:text-palette-50 ${width && 'w-[80%]'} ${margin && 'mt-3'} ${props.left && 'w-full text-left'} ${props.className && props.className}`}>
      {children}
    </h3>
  )
}