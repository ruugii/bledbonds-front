import React from 'react';

interface TextProps {
  children: React.ReactNode;
  margin?: boolean;
  className?: string;
}

export default function Text(props: TextProps) {
  if (typeof props.children === 'string') {
    return (
      <p
        className={`text-palette-11 text-left text-lg ${props.margin ? 'mb-4' : ''} ${props.className}`}
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    );
  } else {
    return (
      <p className={`text-palette-11 text-left text-lg ${props.margin ? 'mb-4' : ''}`}>{props.children}</p>
    )
  }
}
