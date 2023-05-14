export type InputName = keyof BuyFlowData

export type InputProps = {
  name: InputName
  title: string
  type: string
  initialValue: string | number
}

export type BuyFlowData = {
  email: string
  age: number
}
