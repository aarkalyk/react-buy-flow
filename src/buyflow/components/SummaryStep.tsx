import React from 'react'
import { Link } from 'react-router-dom'
import { BuyFlowData, InputName } from '../types'

interface SummaryStepProps {
  collectedData: BuyFlowData
}

const TITLE_TO_INPUT_NAME: { [key in InputName]: string } = {
  age: 'Age',
  email: 'Email',
  firstName: 'First name',
  lastName: 'Last name',
}

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
  return (
    <div aria-label="Summary of your entered data">
      {(Object.entries(collectedData) as [InputName, string][]).map(
        ([name, value]) => (
          <div key={name}>{TITLE_TO_INPUT_NAME[name] + ': ' + value}</div>
        )
      )}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </div>
  )
}

export default SummaryStep
