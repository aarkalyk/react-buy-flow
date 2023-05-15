import { BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'

import SummaryStep from './SummaryStep'

import { BuyFlowData } from '../types'

const mockBuyFlowData: BuyFlowData = {
  age: 30,
  email: 'name@example.com',
}

describe('<SummaryStep />', () => {
  it('should display the collected user data', () => {
    const component = render(<SummaryStep collectedData={mockBuyFlowData} />, {
      wrapper: BrowserRouter,
    })

    expect(component.queryByText(`Age: ${mockBuyFlowData.age}`)).not.toBeNull()
    expect(
      component.queryByText(`Email: ${mockBuyFlowData.email}`)
    ).not.toBeNull()
  })

  it('should redirect the user to the purchased route when "Purchase" link is clicked', () => {
    const history = createMemoryHistory()

    const component = render(
      <Router history={history}>
        <SummaryStep collectedData={mockBuyFlowData} />
      </Router>
    )

    expect(history.entries).toHaveLength(1)

    const purchaseLink = component.getByText(/Purchase/)
    fireEvent.click(purchaseLink)

    expect(history.entries).toHaveLength(2)
    expect(history.entries[1].pathname).toEqual('/purchased=dev_ins')
  })
})
