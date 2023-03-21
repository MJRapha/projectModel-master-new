import { Offcanvas, Stack } from 'react-bootstrap'
import CardItem from '../card-item/CardItem';
import { useShoppingCart } from '../../context/ShoppingCartContext'

type ShoppingCartProps = {
    isOpen: boolean;
}

const BuyingBasket = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end" style={{ background: "rgba(10, 8, 58, 0.913)" }}>
            <Offcanvas.Header closeButton style={{
                background: "white"
            }}>
                <Offcanvas.Title>Buying Basket</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CardItem key={item.id} {...item} />
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default BuyingBasket