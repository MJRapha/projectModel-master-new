import { motion } from "framer-motion"
import { Fragment } from "react"
import { Button, Stack } from "react-bootstrap"
import { newGamesArr } from "../../api/newGamesArr"
import { nintendoGamesArr } from "../../api/nintendoGames"
import { psGamesArr } from "../../api/psGames"
import { xboxGamesArr } from "../../api/xboxGames"
import { useAppSelector } from "../../app/hooks"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurrency"

type CardItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CardItemProps) {
    const { Narticles } = useAppSelector((state) => state.NintendoGames);
    const { Xarticles } = useAppSelector((state) => state.XboxGames);
    const { PSarticles } = useAppSelector((state) => state.PSGames);
    const { articles } = useAppSelector((state) => state.NewGames);
    let allArticles = [...Narticles, ...Xarticles, ...PSarticles, ...articles]
    const { removeFromCart } = useShoppingCart()

    const nintendoItem = nintendoGamesArr.find(i => i.id === id)
    if (nintendoItem == null) {
        return null
    }

    const xboxItem = xboxGamesArr.find(i => i.id === id)
    if (xboxItem == null) {
        return null
    }

    const psItem = psGamesArr.find(i => i.id === id)
    if (psItem == null) {
        return null
    }

    const newGameItem = newGamesArr.find(i => i.id === id)
    if (newGameItem == null) {
        return null
    }
    console.log(allArticles)

    return (
        <>
            {allArticles.map((a) => (
                <Fragment>
                    {
                        (
                            a.company === 'Nintendo' &&
                            <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
                                <div className="me-auto">
                                    <div>{a.nameOfGame}</div>
                                    <div>
                                        {nintendoItem.nameOfGame} {quantity > 1 && (
                                            <span className="text-muted" style={{ fontSize: ".65rem", color: "white" }}>
                                                {quantity}x
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-muted" style={{ fontSize: ".75rem" }}>
                                        {formatCurrency(nintendoItem.price)}
                                    </div>
                                </div>
                                <div>{formatCurrency(nintendoItem.price * quantity)}</div>
                                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(nintendoItem.id)}>
                                    &times;
                                </Button>
                            </Stack>
                        )
                        ||
                        (a.company === 'X-Box' &&
                            <motion.div>
                                <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <div>
                                            {xboxItem.nameOfGame} {quantity > 1 && (
                                                <span className="text-muted" style={{ fontSize: ".65rem", color: "white" }}>
                                                    {quantity}x
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-muted" style={{ fontSize: ".75rem" }}>
                                            {formatCurrency(xboxItem.price)}
                                        </div>
                                    </div>
                                    <div>{formatCurrency(xboxItem.price * quantity)}</div>
                                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(xboxItem.id)}>
                                        &times;
                                    </Button>
                                </Stack>
                            </motion.div>
                        ) ||
                        (a.company === 'Sony Playstation' &&
                            <motion.div>
                                <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h3>
                                            {psItem.nameOfGame} {quantity > 1 && (
                                                <span className="text-muted" style={{ fontSize: ".65rem", color: "white" }}>
                                                    {quantity}x
                                                </span>
                                            )}
                                        </h3>
                                        <div className="text-muted" style={{ fontSize: ".75rem" }}>
                                            {formatCurrency(psItem.price)}
                                        </div>
                                    </div>
                                    <div>{formatCurrency(psItem.price * quantity)}</div>
                                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(psItem.id)}>
                                        &times;
                                    </Button>
                                </Stack>
                            </motion.div>
                        ) ||
                        (a.company === 'New' &&
                            <motion.div>
                                <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <div>
                                            {newGameItem.nameOfGame} {quantity > 1 && (
                                                <span className="text-muted" style={{ fontSize: ".65rem", color: "white" }}>
                                                    {quantity}x
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-muted" style={{ fontSize: ".75rem" }}>
                                            {formatCurrency(newGameItem.price)}
                                        </div>
                                    </div>
                                    <div>{formatCurrency(newGameItem.price * quantity)}</div>
                                    <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(newGameItem.id)}>
                                        &times;
                                    </Button>
                                </Stack>
                            </motion.div>
                        )
                    }
                </Fragment>
            ))
            }
        </>
    )
}