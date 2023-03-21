import { Fragment } from "react"
import { Stack } from "react-bootstrap"
import { newGamesArr } from "../../api/newGamesArr"
import { nintendoGamesArr } from "../../api/nintendoGames"
import { psGamesArr } from "../../api/psGames"
import { xboxGamesArr } from "../../api/xboxGames"
import { useAppSelector } from "../../app/hooks"
import { useShoppingCart } from "../../context/ShoppingCartContext"

type CardItemProps = {
    id: number
    quantity: number
}

const CardItem = ({ id, quantity }: CardItemProps) => {

    const { Narticles } = useAppSelector((state) => state.NintendoGames);
    const { Xarticles } = useAppSelector((state) => state.XboxGames);
    const { PSarticles } = useAppSelector((state) => state.PSGames);
    const { articles } = useAppSelector((state) => state.NewGames);
    let allArticles = [...Narticles, ...Xarticles, ...PSarticles, ...articles]
    const { removeFromCart } = useShoppingCart()

    const nintendoItem = nintendoGamesArr.find(i => i.id === id)
    if (nintendoItem == null) return null

    const xboxItem = xboxGamesArr.find(i => i.id === id)
    if (xboxItem == null) return null

    const psItem = psGamesArr.find(i => i.id === id)
    if (psItem == null) return null

    const newGameItem = newGamesArr.find(i => i.id === id)
    if (newGameItem == null) return null

    return (
        <>
            {allArticles.map((a) => (
                <Fragment>
                    {
                        (
                            a.company === 'Nintendo' &&
                            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                                <img src={nintendoItem.image} alt=""
                                    style={{ width: "125px", height: "75px", objectFit: "cover" }}
                                />
                                <div className="me-auto">
                                    <div>
                                        {nintendoItem.nameOfGame} {quantity > 1 && (
                                            <span className="text-muted" style={{ fontSize: ".65rem", color: "white" }}>
                                                {quantity}x
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Stack>
                        )
                        /* ||
                    (a.company === 'X-Box') ||
                    (a.company === 'Sony Playstation') ||
                    (a.company === 'New') */
                    }
                </Fragment>
            ))}
        </>
    )
}

export default CardItem