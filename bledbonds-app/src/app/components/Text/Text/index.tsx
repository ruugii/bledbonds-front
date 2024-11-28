import React from 'react';

interface TextProps {
  children: React.ReactNode;
  margin?: boolean;
  className?: string;
  left?: boolean;
  justify?: boolean;
  full?: boolean;
  big?: boolean;
  bold?: boolean;
  subtitle?: boolean;
  center?: boolean;
  right?: boolean;
}

export default function Text(props: TextProps) {
  if (typeof props.children === 'string') {
    return (
      <p
      className={`text-palette-11 dark:text-palette-50 text-left ${props.margin ? 'mb-4' : ''} ${props.className} ${props.left && 'text-left'} ${props.justify && 'text-justify'} ${props.full && 'w-full'} ${props.big ? 'text-2xl' : props.subtitle ? 'text-3xl' : 'text-lg'} ${props.bold ? 'font-bold' : ''} ${props.center ? 'text-center' : ''} ${props.right ? 'text-right' : ''}`}
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    );
  } else {
    return (
      <p className={`text-palette-11 dark:text-palette-50 text-left ${props.margin ? 'mb-4' : ''} ${props.className} ${props.left && 'text-left'} ${props.justify && 'text-justify'} ${props.full && 'w-full'} ${props.big ? 'text-2xl' : 'text-lg'} ${props.center ? 'text-center' : ''} ${props.right ? 'text-right' : ''}`}>{props.children}</p>
    )
  }
}
