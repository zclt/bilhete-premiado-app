export default function Aposta({ values, handleChange, inputsRef }) {
    const inputElements = values.map((val, idx) => (
        <input
            key={idx}
            id={idx}
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
            textAlign: 'center',
            margin: '4px'
            }}
            type="number"
        />
    ));
    return (
        <>
            <h1>Digite sua aposta</h1>
            <div style={{ display: 'inline-flex', padding: '20px', flexDirection: 'column' }}>
                <div>{inputElements.slice(0, 6)}</div>
                <div>{inputElements.slice(6)}</div>
            </div>
        </>
    )
}