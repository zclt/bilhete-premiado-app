import { useRef, useEffect, useState } from 'react'
import Dezenas from './components/Dezenas'
import Aposta from './components/Aposta'
import api from './services/api'
import './App.css'
function App() {
  const [resultados, setResultados] = useState({})
  const [values, setValues] = useState(Array(6).fill(''));
  const inputsRef = useRef([]);

  useEffect(() => {
    api.get("portaldeloterias/api/home/ultimos-resultados")
        .then(response => setResultados(response.data))
        .catch(error => console.error(error));
    }, []);

  const handleChange = (index, event) => {
    const raw = event.target.value;

    // Remove qualquer caractere que não seja número
    const value = raw.replace(/\D/g, '');

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value.length === 2 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <>
      <Aposta values={values} handleChange={handleChange} inputsRef={inputsRef}/>

      <Dezenas 
        nome="mega-sena" 
        data={resultados?.megasena?.dataApuracao} 
        resultados={resultados?.megasena?.dezenas} 
        apostas={values} />

      <Dezenas 
        nome="quina" 
        data={resultados?.quina?.dataApuracao} 
        resultados={resultados?.quina?.dezenas} 
        apostas={values} />

      <footer style={{ bottom: 0, textAlign: 'center', padding: '10px' }}>
        <a href="https://link.mercadopago.com.br/bilhetepremiadoapp" target="_blank" rel="noopener noreferrer">
          Contribua com o projeto
        </a>
      </footer>
      
    </>
  )
}

export default App
