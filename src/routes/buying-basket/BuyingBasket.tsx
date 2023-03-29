import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency';
import { nintendoGamesArr } from '../../api/nintendoGames';
import { xboxGamesArr } from '../../api/xboxGames';
import { psGamesArr } from '../../api/psGames';
import { newGamesArr } from '../../api/newGamesArr';
import { CardItem } from '../card-item/CardItem';
import AnimatedCart from '../../Containers/animated-pages/AnimatedCart';

type ShoppingCartProps = {
    isOpen: boolean;
}


const BuyingBasket = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    console.log(cartItems)
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end" style={{ backgroundColor: "rgba(0, 0, 0, .6)" }}>
            <AnimatedCart>
                <Offcanvas.Header closeButton style={{
                    background: "black"
                }}>
                    <Offcanvas.Title style={{ color: "white" }}>Buying Basket</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {cartItems.map(item => (
                            <CardItem key={item.id} {...item} />
                        ))}

                        <div className="ms-auto fw-bold fs-5" style={{ color: "white" }}>
                            Total {formatCurrency(cartItems.reduce((total, CardItem) => {
                                const nintendoItem = nintendoGamesArr.find(i => i.id === CardItem.id)
                                const xboxItem = xboxGamesArr.find(i => i.id === CardItem.id)
                                const psItem = psGamesArr.find(i => i.id === CardItem.id)
                                const newGameItem = newGamesArr.find(i => i.id === CardItem.id)
                                return total + (nintendoItem?.price || 0) * CardItem.quantity + (xboxItem?.price || 0) * CardItem.quantity + (psItem?.price || 0) * CardItem.quantity + (newGameItem?.price || 0) * CardItem.quantity
                            }, 0)
                            )}
                        </div>
                    </Stack>

                </Offcanvas.Body>
            </AnimatedCart>
        </Offcanvas>
    )
}

export default BuyingBasket