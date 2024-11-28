'use client';

import Subtitle from "../Text/Subtitle";
import Title from "../Text/Title";

interface FailProps {
  page: 'blog' | 'event' | 'newsletter'
}

export default function Fail(props: FailProps) {
  if (props.page === 'blog') {
    return (
      <div className="flex items-center content-center justify-center bg-palette-3 flex-col">
        <Title bold width grid center>
          BLEDBONDS - CREAR POST EN EL BLOG
        </Title>
        <Subtitle margin bold width grid center>
          Solo puedes acceder a esta página si eres un administrador
        </Subtitle>
      </div>
    )
  } else if (props.page === 'event') {
    return (
      <div className="flex items-center content-center justify-center bg-palette-3 flex-col">
        <Title bold width grid center>
          BLEDBONDS - CREAR EVENTO
        </Title>
        <Subtitle margin bold width grid center>
          Solo puedes acceder a esta página si eres un administrador
        </Subtitle>
      </div>
    )
  } else if (props.page === 'newsletter') {
    return (
      <div className="flex items-center content-center justify-center bg-palette-3 flex-col">
        <Title bold width grid center>
          BLEDBONDS - CREAR NEWSLETTER
        </Title>
        <Subtitle margin bold width grid center>
          Solo puedes acceder a esta página si eres un administrador
        </Subtitle>
      </div>
    )
  }
}