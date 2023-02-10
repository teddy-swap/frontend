export type ModalProps = {
  open: boolean
  onClose: () => void
}

export type Transaction = {
  type: string
  id: string
  deadline: Date
}

export type TokenGroupProps = {
  token1: string
  token2: string
  token1ID: string
  token2ID: string
}

export enum FarmIconType {
  TEDDY = '🧸',
  GRIZZLY = '🐻',
  POLAR = '🐻‍❄️',
}
