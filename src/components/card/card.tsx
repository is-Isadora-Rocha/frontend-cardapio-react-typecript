import "./card.css";

interface CardProps {
    image: string,
    price: number,
    title: string
}

export function Card({ image, price, title } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}