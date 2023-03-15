import { Link } from "react-router-dom";
import { NewGamesItemProps } from "../../@types/types";
import css from './GameItem.module.scss'

const NewGameItem = ({ nameOfGame, image, id, price }: NewGamesItemProps) => {
    return (
        <div className={css.deckOfCards} >
            <div className="w-75 m-1 shadow-lg border-light border-5 rounded d-flex flex-column align-items-center">
                <img className="w-50 shadow-lg bg-white rounded card" src={image} alt="Card cap" />
                <h5 className={css.gameName}>{nameOfGame}</h5>
                <h6 className={css.gamePrice}>${price}</h6>
                <Link className={css.link} to={`games/new/${id}`}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default NewGameItem