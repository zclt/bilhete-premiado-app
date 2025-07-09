import { useEffect, useState } from 'react'
import api from './services/api';
import './App.css'

function App() {
  const [resultados, setResultados] = useState({})
  const [values, setValues] = useState(Array(6).fill(''));

  useEffect(() => {
    api.get("portaldeloterias/api/home/ultimos-resultados")
        .then(response => setResultados(response.data))
        .catch(error => console.error(error));
    }, []);

  useEffect(() => {
    console.log(values);
    resultados?.megasena?.dezenas.map(d => {
      if(values.includes(d)) {
        console.log(d);
      }
    });
    
  }, [values]);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const verificaAposta = (dezena) => {
    return values.includes(dezena);
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '8px', padding: '20px' }}>
        {values.map((val, idx) => (
          <input
            key={idx}
            value={val}
            onChange={(e) => handleChange(idx, e)}
            maxLength={2}
            style={{
              width: '3ch',
              padding: '4px',
              border: '2px solid black',
              textAlign: 'center'
            }}
          />
        ))}
      </div>

      <strong>Megasena</strong>
      <span>{resultados?.megasena?.dataApuracao}</span>
      <ul>
        {resultados?.megasena?.dezenas.map((r, i) => (
          <li key={i} className={verificaAposta(r) ? "acerto" : ""}>{r}</li>
        ))}
      </ul>

      <strong>Quina</strong>
      <span>{resultados?.quina?.dataApuracao}</span>
      <ul>
        {resultados?.quina?.dezenas.map((r, i) => (
          <li key={i} className={verificaAposta(r) ? "acerto" : ""}>{r}</li>
        ))}
      </ul>
    </>
  )
}

export default App
