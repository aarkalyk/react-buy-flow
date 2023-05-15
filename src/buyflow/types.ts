export type InputName = keyof BuyFlowData

export type InputProps = {
  name: InputName
  title: string
  type: string
  ariaLabel: string
  initialValue: string | number
  required?: boolean
}

export type BuyFlowData = {
  email: string
  age: number
}
