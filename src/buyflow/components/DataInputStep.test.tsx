import { fireEvent, render } from '@testing-library/react'
import user from '@testing-library/user-event'

import DataInputStep from './DataInputStep'
import { ComponentProps } from 'react'

const renderDataInputStep = (
  props: Partial<ComponentProps<typeof DataInputStep>>
) =>
  render(
    <DataInputStep
      ariaLabel="input form"
      inputProps={[
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          ariaLabel: 'your email',
          initialValue: '',
        },
      ]}
      onSubmit={jest.fn()}
      {...props}
    />
  )

describe('<DataInputStep />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('when the form is submitted', () => {
    it('should call onSubmit callback with the correct data', () => {
      const mockOnSubmit = jest.fn()

      const component = renderDataInputStep({ onSubmit: mockOnSubmit })

      const input = component.getByLabelText('your email')
      user.type(input, 'name@example.com')

      const form = component.getByLabelText('input form')
      fireEvent.submit(form)

      expect(mockOnSubmit).toHaveBeenCalledWith({ email: 'name@example.com' })
    })
  })

  describe('when the next button is clicked', () => {
    it('should call onSubmit callback with the correct data', () => {
      const mockOnSubmit = jest.fn()

      const component = renderDataInputStep({ onSubmit: mockOnSubmit })

      const input = component.getByLabelText('your email')
      user.type(input, 'name@example.com')

      const nextButton = component.getByText(/Next/)
      fireEvent.click(nextButton)

      expect(mockOnSubmit).toHaveBeenCalledWith({ email: 'name@example.com' })
    })
  })
})
