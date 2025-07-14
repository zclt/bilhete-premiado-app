import { render, screen } from '@testing-library/react'
import Dezenas from './Dezenas'

describe('Dezenas', () => {
  const defaultProps = {
    nome: 'Mega-Sena',
    data: '01/01/2024',
    resultados: ['01', '02', '03', '04', '05', '06'],
    apostas: ['01', '03', '06', '10', '20', '30']
  }

  it('renderiza o nome e a data', () => {
    render(<Dezenas {...defaultProps} />)
    expect(screen.getByText('Mega-Sena')).toBeInTheDocument()
    expect(screen.getByText('01/01/2024')).toBeInTheDocument()
  })

  it('renderiza todos os resultados como itens de lista', () => {
    render(<Dezenas {...defaultProps} />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(defaultProps.resultados.length)
    defaultProps.resultados.forEach(r => {
      expect(screen.getByText(r)).toBeInTheDocument()
    })
  })

  it('destaca os acertos com a classe acerto', () => {
    render(<Dezenas {...defaultProps} />)
    const acertos = defaultProps.resultados.filter(r => defaultProps.apostas.includes(r))
    acertos.forEach(r => {
      const item = screen.getByText(r)
      expect(item).toHaveClass('acerto')
    })
    const erros = defaultProps.resultados.filter(r => !defaultProps.apostas.includes(r))
    erros.forEach(r => {
      const item = screen.getByText(r)
      expect(item).not.toHaveClass('acerto')
    })
  })

  it('exibe "Ganhou !" se todas as dezenas forem acertadas', () => {
    const props = {
      ...defaultProps,
      apostas: [...defaultProps.resultados]
    }
    render(<Dezenas {...props} />)
    expect(screen.getByText('Ganhou !')).toBeInTheDocument()
  })

  it('não exibe "Ganhou !" se nem todas as dezenas forem acertadas', () => {
    render(<Dezenas {...defaultProps} />)
    expect(screen.queryByText('Ganhou !')).not.toBeInTheDocument()
  })

  it('lida com resultados ou apostas vazios', () => {
    render(<Dezenas nome="Teste" data="Hoje" resultados={[]} apostas={['01', '02']} />)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
    expect(screen.queryByText('Ganhou !')).not.toBeInTheDocument()
  })

  it('lida com resultados ou apostas undefined', () => {
    render(<Dezenas nome="Teste" data="Hoje" resultados={undefined} apostas={undefined} />)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
    expect(screen.queryByText('Ganhou !')).not.toBeInTheDocument()
  })
}) 