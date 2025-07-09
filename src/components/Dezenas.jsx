export default function Dezenas({ nome, data, resultados, apostas }) {    
    return (
        <>
            <h1>{nome}</h1>
            <h2>{data}</h2>
            <ul>
                {resultados?.map((r, i) => (
                    <li key={i} className={apostas.includes(r) ? "acerto" : ""}>{r}</li>
                ))}
            </ul>
            <div>{resultados?.every(valor => apostas?.includes(valor)) ? <strong>Ganhou !</strong> : <></>}</div>
        </>
    )
}