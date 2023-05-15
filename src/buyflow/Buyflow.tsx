import React, { useState } from 'react'

import DataInputStep from './components/DataInputStep'
import SummaryStep from './components/SummaryStep'
import { BuyFlowData, InputProps } from './types'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  designerIns = 'designer_ins',
}

const PRODUCT_IDS_TO_NAMES: { [key in ProductIds]: string } = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}

type StepName = 'email' | 'age' | 'fullName' | 'summary'

const PRODUCT_IDS_TO_STEPS: { [key in ProductIds]: StepName[] } = {
  [ProductIds.devIns]: ['email', 'age', 'summary'],
  [ProductIds.designerIns]: ['email', 'age', 'fullName', 'summary'],
}

const INPUT_PROPS_TO_STEPS: { [key in StepName]: InputProps[] } = {
  age: [
    {
      name: 'age',
      title: 'Age',
      type: 'number',
      ariaLabel: 'Enter your age here',
      initialValue: 0,
      required: true,
    },
  ],
  email: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      ariaLabel: 'Enter your email here',
      initialValue: '',
      required: true,
    },
  ],
  fullName: [
    {
      name: 'firstName',
      title: 'First name',
      type: 'string',
      ariaLabel: 'Enter your first name here',
      initialValue: '',
      required: true,
    },
    {
      name: 'lastName',
      title: 'Last name',
      type: 'string',
      ariaLabel: 'Enter your last name here',
      initialValue: '',
      required: true,
    },
  ],
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
          ariaLabel="User data input form"
          inputProps={INPUT_PROPS_TO_STEPS[currentStep]}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}

export default Buyflow
