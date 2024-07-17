interface SectionTitleProps {
  children: React.ReactNode;
  bold?: boolean;
  width?: boolean;
  margin?: boolean;
  lg?: boolean;
  left?: boolean;
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
    <h3 className={`${lg ? 'text-lg' : 'text-2xl'} ${bold && 'font-bold'} text-palette-11 ${width && 'w-[80%]'} ${margin && 'mt-3'} ${props.left && 'w-full text-left'}`}>
      {children}
    </h3>
  )
}