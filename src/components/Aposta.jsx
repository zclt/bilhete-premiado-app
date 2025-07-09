export default function Aposta({ values, handleChange }) {    
    return (
        <>
            <h1>Digite sua aposta</h1>
            <div style={{ display: 'inline-flex', gap: '5px', padding: '20px' }}>
                {values?.map((val, idx) => (
                <input
                    id={idx}
                    key={idx}
                    value={val}
                    onChange={(e) => handleChange(idx, e)}
                    maxLength={2}
                    style={{
                        fontSize: '18px',
                        borderRadius: '18px',
                        padding: '0px',
                        width: '3ch',                        
                        border: '2px solid black',
                        textAlign: 'center'
                    }}
                />))}
            </div>
        </>
    )
}