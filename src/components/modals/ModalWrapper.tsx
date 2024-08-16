import { TestModal } from '@modals'

type OwnProps = { isOpen: boolean } & TModalProps

export const ModalWrapper = ({ isOpen, context, emit, close }: OwnProps) => {
  const components = {
    TestModal,
  }
  const currentModal = context.name as keyof typeof components
  const Component = components[currentModal]

  return () => {
    if (isOpen && Component)
      return <Component context={context} emit={emit} close={close} />
  }
}
