import { fireEvent, render } from '@testing-library/react'
import user from '@testing-library/user-event'

import Buyflow, { ProductIds } from './Buyflow'
import { BrowserRouter } from 'react-router-dom'

describe('<Buyflow />', () => {
  describe('dev insurance flow', () => {
    it('should let the user enter their data and display it in a summary', () => {
      const component = render(<Buyflow productId={ProductIds.devIns} />, {
        wrapper: BrowserRouter,
      })

      expect(component.queryByText(/Developer Insurance/)).not.toBeNull()

      // Step 1
      expect(component.queryByText(/Email/)).not.toBeNull()

      const mockEmail = 'name@example.com'
      const emailInput = component.getByLabelText(/Enter your email here/)
      user.type(emailInput, mockEmail)

      const form = component.getByLabelText('User data input form')
      fireEvent.submit(form)

      // Step 2
      expect(component.queryByText(/Age/)).not.toBeNull()

      const mockAge = 30
      const ageInput = component.getByLabelText(/Enter your age here/)
      user.type(ageInput, `${mockAge}`)

      fireEvent.submit(form)

      // Summary
      expect(component.queryByText(`Age: ${mockAge}`)).not.toBeNull()
      expect(component.queryByText(`Email: ${mockEmail}`)).not.toBeNull()
    })
  })
})
