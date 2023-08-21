import { Link } from "react-router-dom"

const Perguntas = ({ lista }) => {
    return (
        <div>
            {lista.map((item) => (
                <div key={item.id}>
                    <Link to={item.link}><h2>{item.text}</h2></Link>
                </div>
            ))}
        </div>
    )
}

export default Perguntas