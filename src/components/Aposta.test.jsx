import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Aposta from './Aposta'

describe('Aposta Component', () => {
  const mockHandleChange = vi.fn()
  const mockInputsRef = { current: [] }

  const defaultProps = {
    values: ['01', '02', '03', '04', '05', '06'],
    handleChange: mockHandleChange,
    inputsRef: mockInputsRef
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the component with title', () => {
    render(<Aposta {...defaultProps} />)
    
    expect(screen.getByText('Digite sua aposta')).toBeInTheDocument()
  })

  it('should render the correct number of input fields', () => {
    render(<Aposta {...defaultProps} />)
    
    const inputs = screen.getAllByRole('spinbutton')
    expect(inputs).toHaveLength(6)
  })

  it('should render input fields with correct values', () => {
    render(<Aposta {...defaultProps} />)
    
    const inputs = screen.getAllByRole('spinbutton')
    inputs.forEach((input, index) => {
      // Inputs do tipo number convertem strings para números
      expect(input).toHaveValue(Number(defaultProps.values[index]))
    })
  })

  it('should call handleChange when input value changes', async () => {
    const user = userEvent.setup()
    render(<Aposta {...defaultProps} />)
    
    const firstInput = screen.getAllByRole('spinbutton')[0]
    await user.clear(firstInput)
    await user.type(firstInput, '10')
    
    expect(mockHandleChange).toHaveBeenCalledWith(0, expect.any(Object))
  })

  it('should have correct input attributes', () => {
    render(<Aposta {...defaultProps} />)
    
    const inputs = screen.getAllByRole('spinbutton')
    inputs.forEach((input, index) => {
      expect(input).toHaveAttribute('maxLength', '2')
      expect(input).toHaveAttribute('type', 'number')
      expect(input).toHaveAttribute('id', index.toString())
    })
  })

  it('should apply correct styles to inputs', () => {
    render(<Aposta {...defaultProps} />)
    
    const inputs = screen.getAllByRole('spinbutton')
    inputs.forEach(input => {
      expect(input).toHaveStyle({
        fontSize: '15px',
        borderRadius: '15px',
        padding: '4px',
        width: '2ch',
        border: '2px solid #000000af',
        textAlign: 'center'
      })
    })
  })

  it('should handle empty values array', () => {
    render(<Aposta values={[]} handleChange={mockHandleChange} inputsRef={mockInputsRef} />)
    
    const inputs = screen.queryAllByRole('spinbutton')
    expect(inputs).toHaveLength(0)
  })

  it('should handle undefined values', () => {
    render(<Aposta values={undefined} handleChange={mockHandleChange} inputsRef={mockInputsRef} />)
    
    const inputs = screen.queryAllByRole('spinbutton')
    expect(inputs).toHaveLength(0)
  })

  it('should assign refs to input elements', () => {
    render(<Aposta {...defaultProps} />)
    
    const inputs = screen.getAllByRole('spinbutton')
    expect(mockInputsRef.current).toHaveLength(6)
    inputs.forEach((input, index) => {
      expect(mockInputsRef.current[index]).toBe(input)
    })
  })

  it('should handle different array lengths', () => {
    const shortValues = ['01', '02', '03']
    render(<Aposta values={shortValues} handleChange={mockHandleChange} inputsRef={mockInputsRef} />)
    
    const inputs = screen.getAllByRole('spinbutton')
    expect(inputs).toHaveLength(3)
  })

  it('should maintain input focus after value change', async () => {
    const user = userEvent.setup()
    render(<Aposta {...defaultProps} />)
    
    const firstInput = screen.getAllByRole('spinbutton')[0]
    await user.click(firstInput)
    await user.type(firstInput, '15')
    
    expect(firstInput).toHaveFocus()
  })
}) 