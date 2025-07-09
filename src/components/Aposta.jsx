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
                        fontSize: '15px',
                        borderRadius: '15px',
                        padding: '4px',
                        width: '2ch',                        
                        border: '2px solid #000000af',
                        textAlign: 'center'
                    }}
                    type="number"
                />))}
            </div>
        </>
    )
}