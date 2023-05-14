import { useState } from 'react'
import { BuyFlowData, InputName, InputProps } from './types'

interface Props {
  inputData: InputProps[]
  onSubmit: (value: Partial<BuyFlowData>) => void
}

const DataInputStep = ({ inputData, onSubmit }: Props) => {
  const [data, setData] = useState<Partial<BuyFlowData>>({})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        onSubmit(data)
      }}
    >
      {inputData.map(({ title, type, name }) => (
        <div key={name}>
          <label htmlFor={name}>{title + ' '}</label>
          <input
            required
            type={type}
            name={name}
            onChange={({ target: { value } }) => {
              setData({
                ...data,
                [name]: type === 'number' ? Number(value) : value,
              })
            }}
          ></input>
        </div>
      ))}
      <button type="submit">Next</button>
    </form>
  )
}

export default DataInputStep
