type TValidationTypes = 'name' | 'email' | 'phoneNumber' | 'birth'

type TModalConext = {
  name: string
  mode?: string
  data?: unknown
}

type TModalProps = {
  context: TModalConext
  emit: (data: unknown) => void
  close: () => void
}
