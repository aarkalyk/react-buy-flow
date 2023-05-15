import React from 'react'
import { Link } from 'react-router-dom'
import { BuyFlowData } from '../types'

interface SummaryStepProps {
  collectedData: BuyFlowData
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
