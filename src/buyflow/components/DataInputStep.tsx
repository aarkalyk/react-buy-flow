import { useState } from 'react'
import { BuyFlowData, InputProps } from '../types'

interface Props {
  ariaLabel?: string
  inputProps: InputProps[]
  onSubmit: (value: Partial<BuyFlowData>) => void
}

const DataInputStep = ({ ariaLabel, inputProps, onSubmit }: Props) => {
  const [data, setData] = useState<Partial<BuyFlowData>>({})

  return (
    <form
      aria-label={ariaLabel}
      onSubmit={(event) => {
        event.preventDefault()

        onSubmit(data)
      }}
    >
      {inputProps.map(({ title, type, name, ariaLabel, required }) => (
        <div key={name}>
          <label htmlFor={name}>{title + ' '}</label>
          <input
            required={required}
            type={type}
            name={name}
            aria-label={ariaLabel}
            onChange={({ target: { value } }) => {
              setData({
                ...data,
                [name]: type === 'number' ? Number(value) : value,
              })
            }}
          ></input>
        </div>
      ))}
      <button type="submit" aria-label="Click to get to the next step">
        Next
      </button>
    </form>
  )
}

export default DataInputStep
