import { useState } from 'react'
import { ModalWrapper } from '@modals'

export const useModalHandler = <TData = unknown>() => {
  const [context, setContext] = useState<TModalConext>({
    name: '',
  })
  const [data, setData] = useState<TData>()
  const [isOpen, setIsOpen] = useState(false)

  const open = (context: TModalConext) => {
    setContext({ ...context })
    setIsOpen(true)
  }

  const close = () => {
    setContext({ name: '' })
    setIsOpen(false)
  }

  const emit = (data: unknown) => {
    setContext({ ...context })
    setData(data as TData)
    setIsOpen(false)
  }

  const Modal = ModalWrapper({
    isOpen,
    context,
    emit,
    close,
  })

  return {
    Modal,
    open,
    data,
  }
}
