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

      expect(component.queryByText(/Developer Insurance/i)).not.toBeNull()

      // Step 1
      expect(component.queryByText(/Email/i)).not.toBeNull()

      const mockEmail = 'name@example.com'
      const emailInput = component.getByLabelText(/Enter your email here/i)
      user.type(emailInput, mockEmail)

      const form = component.getByLabelText('User data input form')
      fireEvent.submit(form)

      // Step 2
      expect(component.queryByText(/Age/i)).not.toBeNull()

      const mockAge = 30
      const ageInput = component.getByLabelText(/Enter your age here/i)
      user.type(ageInput, `${mockAge}`)

      fireEvent.submit(form)

      // Summary
      expect(component.queryByText(`Age: ${mockAge}`)).not.toBeNull()
      expect(component.queryByText(`Email: ${mockEmail}`)).not.toBeNull()
      expect(component.queryByText(/First name/i)).toBeNull()
      expect(component.queryByText(/Last name/i)).toBeNull()
    })
  })

  describe('designer insurance flow', () => {
    it('should let the user enter their data and display it in a summary', () => {
      const component = render(<Buyflow productId={ProductIds.designerIns} />, {
        wrapper: BrowserRouter,
      })

      expect(component.queryByText(/Designer Insurance/i)).not.toBeNull()

      // Step 1
      expect(component.queryByText(/Email/i)).not.toBeNull()

      const mockEmail = 'name@example.com'
      const emailInput = component.getByLabelText(/Enter your email here/i)
      user.type(emailInput, mockEmail)

      const form = component.getByLabelText('User data input form')
      fireEvent.submit(form)

      // Step 2
      expect(component.queryByText(/Age/i)).not.toBeNull()

      const mockAge = 30
      const ageInput = component.getByLabelText(/Enter your age here/i)
      user.type(ageInput, `${mockAge}`)

      fireEvent.submit(form)

      // Step 3
      expect(component.queryByText(/First name/i)).not.toBeNull()

      const mockFirstName = 'Erlich'
      const firstNameInput = component.getByLabelText(
        /Enter your first name here/i
      )
      user.type(firstNameInput, mockFirstName)

      const mockLastName = 'Bachman'
      const lastNameInput = component.getByLabelText(
        /Enter your last name here/i
      )
      user.type(lastNameInput, mockLastName)

      fireEvent.submit(form)

      // Summary
      expect(component.queryByText(`Age: ${mockAge}`)).not.toBeNull()
      expect(component.queryByText(`Email: ${mockEmail}`)).not.toBeNull()
      expect(
        component.queryByText(`First name: ${mockFirstName}`)
      ).not.toBeNull()
      expect(component.queryByText(`Last name: ${mockLastName}`)).not.toBeNull()
    })
  })
})
