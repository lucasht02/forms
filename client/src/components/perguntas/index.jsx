import { setPerguntas, setPerguntasA, setRespostasA1 } from "../../constants"
import { useState } from "react"

const linkToFunctionMap = {
    setPerguntasA: setPerguntasA,
    setRespostasA1: setRespostasA1
}

const Perguntas = () => {
    const [lista, setLista] = useState(setPerguntas)

    function handleClick(e) {
        const newList = linkToFunctionMap[e] || [];
        setLista(newList);
    }



    return (
        <div>
           {lista.map((item) => (
                <div key={item.id}>
                    <button onClick={() => handleClick(item.link)}>{item.text}</button>
                </div>
            ))}
        </div>
    )
}

export default Perguntas