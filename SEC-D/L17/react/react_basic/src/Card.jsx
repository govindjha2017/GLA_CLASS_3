import "./card.css"
const Card = (product)=>{
    return (
       <>
            <div className="card">
                <h3>name : {product.name}</h3>
                <h3>price:{product.price}</h3>
            </div>
       </>
    )
}

export default Card;