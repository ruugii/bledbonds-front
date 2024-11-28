'use client'

export default function Captcha(props: { value: string, onChange: (value: string) => void }) {
  return (
    <input type="text" placeholder="Captcha" value={props.value} onChange={(e) => props.onChange(e.target.value)} className=" hidden" />
  )
}