import { Button, Dropdown } from "react-bootstrap";
import { SonyGamesItemProps } from "../../@types/types";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import css from './GameItem.module.scss'

const PSGameItem = ({ nameOfGame, image, id, price, description }: SonyGamesItemProps) => {
    //using all the cart's options
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    //giving to the quantity the option of the number of products we have inside the cart
    const quantity = getItemQuantity(id)
    return (
        <>
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
                            /* giving to this button the option of increase the cart's quantity */
                            <Button className="w-10" onClick={() => increaseCartQuantity(id)}>+ Add To Basket</Button>
                        ) : (
                            <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem", color: "white" }}>
                                    {/* giving to the - button the option of decrease the cart's quantity */}
                                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                    <span className="fs-3" style={{ color: "white" }}>{quantity}</span> in Basket
                                    {/* giving to the + button the option of increase the cart's quantity */}
                                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                </div>
                                {/* giving to this button the option of remove the product from cart's quantity */}
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
        </>
    )
}

export default PSGameItem