import { Link } from "react-router-dom";
import { NintendoGamesItemProps } from "../../@types/types";
import css from './GameItem.module.scss'

const NintendoGameItem = ({ nameOfGame, image, id, price }: NintendoGamesItemProps) => {
    return (

        <>
            <div className="w-25 m-1 shadow-lg border-light border-5 rounded p-2 d-flex flex-column align-items-center">
                <img className="w-50 shadow-lg bg-white rounded card p-2" src={image} alt="Card cap" />
                <h5 className="game-name">{nameOfGame}</h5>
                <p className="game-price">{price}</p>
                <Link className={css.link} to={`/games/nintendo/${id}`}>
                    Read More
                </Link>
            </div>

        </>
    )
}

export default NintendoGameItem