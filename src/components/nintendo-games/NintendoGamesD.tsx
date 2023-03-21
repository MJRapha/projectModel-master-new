/* import { Button } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks'; */
//import { useShoppingCart } from '../../context/ShoppingCartContext';
/* import { toggleBuying } from '../../features/games/gameSlice'; */
//import css from './NintendoGames.module.scss'

function NintendoGamesD() {
    //const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    //const { id } = useParams();
    //const navigate = useNavigate();
    /* const article = useAppSelector((state) =>
        state.NintendoGames.Narticles.find((a) => a.id === id)
    ); */
    /* if (!article) {
        return <Navigate to="/games" />;
    } */
    /* const { nameOfGame, description, image } = article; */
    //const quantity = getItemQuantity(id)

    return (
        <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center h-100">
            {/* <img
                className="w-25 shadow-lg p-3 bg-white rounded"
                src={image}
                alt={nameOfGame}
            />
            <h3 className={css.name}>{nameOfGame}</h3>
            <p className={css.p}>{description}</p> */}

            {/* <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-10" onClick={() => increaseCartQuantity(id)}>+ Add To Basket</Button>
                ) : (
                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <span className="fs-3">{quantity}</span> in Basket
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">cancel</Button>
                    </div>
                )}
            </div> */}
            {/* <button
                className="btn btn-primary w-10 m-2"
                onClick={() => dispatch(toggleBuying(article.id))}
            >

            </button> */}
            {/* <button
                className="btn btn-danger w-10 m-2"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </button> */}
        </div>
    )
}

export default NintendoGamesD