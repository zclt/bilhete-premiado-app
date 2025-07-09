export default function Aposta({ values, handleChange, inputsRef }) {    
    return (
        <>
            <h1>Digite sua aposta</h1>
            <div style={{ display: 'inline-flex', gap: '5px', padding: '20px' }}>
                {values?.map((val, idx) => (
                <input
                    id={idx}
                    key={idx}
                    value={val}
                    ref={(el) => (inputsRef.current[idx] = el)}
                    onChange={(e) => handleChange(idx, e)}
                    maxLength={2}
                    style={{
                        fontSize: '21px',
                        borderRadius: '21px',
                        padding: '6px',
                        width: '2ch',                        
                        border: '2px solid black',
                        textAlign: 'center'
                    }}
                    type="number"
                />))}
            </div>
        </>
    )
}