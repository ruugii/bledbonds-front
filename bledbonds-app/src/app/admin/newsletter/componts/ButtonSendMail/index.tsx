'use client'

import Close from "@/app/Icons/close"
import TextArea from "@/app/UX/TextArea"
import Button from "@/app/UX/button/button"
import Imput from "@/app/UX/imput/imput"
import testNewsletterAPI from "@/app/api/TestNewsletter"
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
          <div className="p-8 border shadow-lg rounded-md bg-palette-1">
            <div className="text-center">
              <div className="flex flex-row content-center items-center gap-3">
                <div className="flex flex-col w-full">
                  <h3 className="text-2xl font-bold text-palette-11">REGISTRATE EN BLED BONDS</h3>
                </div>
                <div onClick={togle} className=" text-palette-11 ">
                  <Close />
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
                <TextArea
                  value={text}
                  onChange={setText}
                  label="Mensaje"
                />
                <Button
                  onClick={() => {
                    const send = () => {
                      const aux = text.split('\n')
                      console.log(aux);
                      
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
                      console.log(aux);
                      
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