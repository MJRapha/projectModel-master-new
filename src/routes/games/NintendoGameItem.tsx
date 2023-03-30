import { Button, Dropdown } from "react-bootstrap";
import { NintendoGamesItemProps } from "../../@types/types";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import css from './GameItem.module.scss'

const NintendoGameItem = ({ id, nameOfGame, image, price, description }: NintendoGamesItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <div className="d-flex flex-column border border-dark rounded w-25">
            <img className={css.gameImg}
                src={image} alt="Card cap" style={{
                    objectFit:
                        "cover"
                }} />
            <div style={{ backgroundColor: "black", width: "100%" }}>
                <div className="m-2">
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
                <Dropdown>
                    <Dropdown.Toggle className={css.link} variant="success" id="dropdown-basic">
                        Read More
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: "rgba(10, 8, 58, 0.913)", width: "350px" }}>
                        <Dropdown.ItemText className={css.p} >{description}</Dropdown.ItemText>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default NintendoGameItem