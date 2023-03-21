import { Link } from "react-router-dom";
import { SonyGamesItemProps } from "../../@types/types";
import css from './GameItem.module.scss'

const PSGameItem = ({ nameOfGame, image, id, price }: SonyGamesItemProps) => {
    return (
        <>
            <div className="w-25 m-1 shadow-lg border-light border-5 rounded d-flex flex-column align-items-center">
                <img className="w-50 shadow-lg bg-white rounded 
                card" src={image} alt="Card cap" style={{
                        objectFit:
                            "cover"
                    }} />
                <div className="m-2">
                    <h5 className={css.gameName}>{nameOfGame}</h5>
                </div>
                <div className="ms-2 text-muted">
                    <h6 className={css.gamePrice}>${price}</h6>
                </div>
                <Link className={css.link} to={`/games/ps/${id}`}>
                    Read More
                </Link>
            </div>

        </>
    )
}

export default PSGameItem