export type ModalProps = {
  open: boolean
  onClose: () => void
}

export type Transaction = {
  type: string
  id: string
  deadline: Date
}
