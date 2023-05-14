import React, { useState } from 'react'
import DataInputStep from './DataInputStep'
import { BuyFlowData, InputProps } from './types'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

type StepName = 'email' | 'age' | 'summary'

const PRODUCT_IDS_TO_STEPS: { [key in ProductIds]: StepName[] } = {
  [ProductIds.devIns]: ['email', 'age', 'summary'],
}

const INPUT_DATA_TO_STEPS: { [key in StepName]: InputProps[] } = {
  age: [{ name: 'age', title: 'age', type: 'number', initialValue: '' }],
  email: [{ name: 'email', title: 'email', type: 'string', initialValue: '' }],
  summary: [],
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStepIndex, setStepIndex] = useState(0)
  const [collectedData, updateData] = useState<BuyFlowData>({
    email: '',
    age: 0,
  })

  const onSubmit = (value: Partial<BuyFlowData>) => {
    if (currentStepIndex < PRODUCT_IDS_TO_STEPS[props.productId].length - 1)
      setStepIndex((prevStep) => prevStep + 1)

    updateData({
      ...collectedData,
      ...value,
    })
  }

  if (!PRODUCT_IDS_TO_STEPS[props.productId].length) {
    return <div>There are no offers at the moment, please come back later</div>
  }

  const currentStep = PRODUCT_IDS_TO_STEPS[props.productId][currentStepIndex]

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {currentStep === 'summary' ? (
        <SummaryStep collectedData={collectedData} />
      ) : (
        <DataInputStep
          inputData={INPUT_DATA_TO_STEPS[currentStep]}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}

export default Buyflow
