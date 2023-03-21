import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NewGamesItemProps } from "../../@types/types";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import css from './GameItem.module.scss'

const NewGameItem = ({ nameOfGame, image, id, price }: NewGamesItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <div className={css.deckOfCards} >
            <div className="w-75 m-1 shadow-lg border-light border-5 rounded d-flex flex-column align-items-center">
                <img className="w-50 shadow-lg bg-white rounded card" src={image} alt="Card cap" style={{
                    objectFit:
                        "cover"
                }} />
                <div className="fs-2 m-2">
                    <h5 className={css.gameName}>{nameOfGame}</h5>
                </div>
                <div className="ms-2 text-muted">
                    <h6 className={css.gamePrice}>${price}</h6>
                </div>
                <div className="mt-auto m-1">
                    {quantity === 0 ? (
                        <Button className="w-10" onClick={() => increaseCartQuantity(id)}>+ Add To Basket</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem", color: "white" }}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span className="fs-3" style={{ color: "white" }}>{quantity}</span> in Basket
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">cancel</Button>
                        </div>
                    )}
                </div>
                <Link className={css.link} to={`games/new/${id}`}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default NewGameItem