import React from 'react';

interface SectionTitleProps {
  readonly children: React.ReactNode;
  readonly bold?: boolean;
  readonly width?: boolean;
  readonly margin?: boolean;
  readonly lg?: boolean;
  readonly left?: boolean;
  readonly className?: string;
  old?: boolean;
  text?: boolean;
}

export default function Price(props: SectionTitleProps) {
  const {
    children,
    bold,
    width,
    margin,
    lg,
    old,
    text
  } = props;

  if (text) {
    return (
      <p
        className={`${lg ? 'text-lg' : 'text-2xl'} ${bold && 'font-bold'} text-palette-11 dark:text-palette-50 ${width && 'w-[80%]'} ${margin && 'mt-3'} ${props.left && 'w-full text-left'} ${props.className && props.className} ${old && 'relative inline-block'}`}
      >
        {children}
        {old && (
          <span className="absolute inset-0 h-1 bg-red-900 dark:bg-red-50 rotate-[10deg] top-[50%] translate-y-[-50%]"></span>
        )}
      </p>
    );
  } else {
    return (
      <h3
        className={`${lg ? 'text-lg' : 'text-2xl'} ${bold && 'font-bold'} text-palette-11 dark:text-palette-50 ${width && 'w-[80%]'} ${margin && 'mt-3'} ${props.left && 'w-full text-left'} ${props.className && props.className} ${old && 'relative inline-block'}`}
      >
        {children}
        {old && (
          <span className="absolute inset-0 h-1 bg-red-900 dark:bg-red-50 rotate-[10deg] top-[50%] translate-y-[-50%]"></span>
        )}
      </h3>
    );
  }

}
