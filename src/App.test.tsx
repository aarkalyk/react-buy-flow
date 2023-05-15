import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import App from './App'
import { Router } from 'react-router-dom'

describe('<App />', () => {
  beforeEach(() => {
    // clean up the router history before each test
    window.history.pushState({}, '', '/')
  })

  it('renders the welcome title', () => {
    render(<App />)

    const welcomeTitle = screen.getByText(/Welcome to Getsafe/i)

    expect(welcomeTitle).toBeInTheDocument()
  })

  it('should redirect to the dev insurance page when clicking on "Buy dev insurance" link', () => {
    render(<App />)

    const buyDevInsuranceLink = screen.getByText(/Buy developer insurance/i)

    fireEvent.click(buyDevInsuranceLink)

    expect(screen.getByText(/Buying developer insurance/i)).toBeInTheDocument()
  })

  it('should redirect to the desinger insurance page when clicking on "Buy designer insurance" link', () => {
    render(<App />)

    const buyDevInsuranceLink = screen.getByText(/Buy designer insurance/i)

    fireEvent.click(buyDevInsuranceLink)

    expect(screen.getByText(/Buying designer insurance/i)).toBeInTheDocument()
  })
})
