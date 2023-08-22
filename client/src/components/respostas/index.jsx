const Respostas = ({ lista }) => {
    return (
        <div>
            {lista.map((item) => (
                <div>
                    <h2>{item.text}</h2>
                </div>
            ))}
        </div>
    )
}

export default Respostas