'use client'

import Close from "@/app/Icons/close"
import TextArea from "@/app/UX/TextArea"
import Button from "@/app/UX/button/button"
import Imput from "@/app/UX/imput/imput"
import testNewsletterAPI from "@/app/api/TestNewsletter"
import SectionTitle from "@/app/components/Text/SectionTitle"
import { useState } from "react"

export default function ButtonSendMail() {
  const [modalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [asunto, setAsunto] = useState('')

  const togle = () => setModalOpen(!modalOpen)

  const [text, setText] = useState('')

  return (
    <div>
      <Button
        onClick={togle}
        className=" mt-2"
        label="Enviar E-mail"
      />
      {modalOpen && (
        <div className="fixed inset-0 bg-palette-11 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-20">
          <Button onClick={() => setModalOpen(false)} className="absolute top-2 right-2 bg-transparent hover:bg-transparent active:bg-transparent text-palette-950 dark:text-palette-1 border-transparent hover:border-transparent active:border-transparent">
            <Close />
          </Button>
          <div className="p-8 border rounded-md bg-palette-1 dark:bg-palette-950 shadow-md shadow-palette-11 dark:shadow-palette-1">
            <div className="text-center">
              <div className="flex flex-row content-center items-center gap-3">
                <div className="flex flex-col w-full">
                  <SectionTitle bold>
                    REGISTRATE EN BLED BONDS
                  </SectionTitle>
                </div>
              </div>
              <div>
                <Imput
                  value={asunto}
                  onChange={setAsunto}
                  type="text"
                  label="Asunto"
                />
                <Imput
                  value={title}
                  onChange={setTitle}
                  type="text"
                  label="Titulo"
                />
                <Imput
                  value={text}
                  onChange={setText}
                  text
                  label="Mensaje"
                />
                <Button
                  onClick={() => {
                    const send = () => {
                      const aux = text.split('\n')
                      
                      testNewsletterAPI(
                        {
                          subject: asunto,
                          text: aux,
                          title: title
                        },
                        {
                          isTest: false
                        }
                      )
                    }

                    send()
                  }}
                  className="mt-2 ml-3"
                  label="Enviar"
                />
                <Button
                  onClick={() => {
                    const send = () => {
                      const aux = text.split('\n')
                      
                      testNewsletterAPI(
                        {
                          subject: asunto,
                          text: aux,
                          title: title
                        },
                        {
                          isTest: true
                        }
                      )
                    }

                    send()
                  }}
                  className="mt-2 ml-3"
                  label="Probar"
                />
                <Button
                  onClick={togle}
                  className="mt-2 ml-3"
                  label="Cancelar"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}