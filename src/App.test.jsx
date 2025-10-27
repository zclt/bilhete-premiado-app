import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import api from './services/api'

vi.mock('./services/api')

describe('App', () => {
  const mockResultados = {
    megasena: {
      dataApuracao: '10/10/2023',
      dezenas: ['01', '02', '03', '04', '05', '06']
    },
    quina: {
      dataApuracao: '11/10/2023',
      dezenas: ['10', '20', '30', '40', '50']
    }
  }

  beforeEach(() => {
    // Mock da API
    api.get.mockResolvedValue({ data: mockResultados })
    // Mock do localStorage
    Storage.prototype.getItem = vi.fn(() => null)
    Storage.prototype.setItem = vi.fn()
  })

  it('renderiza o título e os componentes principais', async () => {
    await act(async () => {
      render(<App />)
    })
    expect(screen.getByAltText('Trevo')).toBeInTheDocument()
    expect(screen.getByText('Digite sua aposta')).toBeInTheDocument()
    // Aguarda carregamento dos resultados
    await waitFor(() => {
      expect(screen.getByText('mega-sena')).toBeInTheDocument()
      expect(screen.getByText('quina')).toBeInTheDocument()
    })
  })

  it('renderiza dezenas e datas vindas da API', async () => {
    await act(async () => {
      render(<App />)
    })
    await waitFor(() => {
      expect(screen.getByText('10/10/2023')).toBeInTheDocument()
      expect(screen.getByText('11/10/2023')).toBeInTheDocument()
      mockResultados.megasena.dezenas.forEach(d => {
        expect(screen.getByText(d)).toBeInTheDocument()
      })
      mockResultados.quina.dezenas.forEach(d => {
        expect(screen.getByText(d)).toBeInTheDocument()
      })
    })
  })

  it('salva valores no localStorage ao digitar', async () => {
    await act(async () => {
      render(<App />)
    })
    const inputs = await screen.findAllByRole('spinbutton')
    await act(async () => {
      await userEvent.type(inputs[0], '12')
    })
    expect(localStorage.setItem).toHaveBeenCalled()
  })

  it('renderiza links do rodapé', async () => {
    await act(async () => {
      render(<App />)
    })
    // Aguarda que todos os useEffect sejam executados
    await waitFor(() => {
      expect(screen.getByText('👉 Contribua com o projeto')).toHaveAttribute('href', expect.stringContaining('mercadopago'))
      expect(screen.getByText('https://loterias.caixa.gov.br/')).toHaveAttribute('href', 'https://loterias.caixa.gov.br/')
    })
  })
}) 