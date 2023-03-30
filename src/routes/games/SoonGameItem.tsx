import { Dropdown } from "react-bootstrap";
import { SoonGamesItemProps } from "../../@types/types";
import css from './GameItem.module.scss'

const GameItem = ({ nameOfGame, image, description, comingSoon }: SoonGamesItemProps) => {
    return (
        <>
            <div className="d-flex flex-column border-5 border-dark rounded w-100">
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
                        <h6 className={css.gameComingIn}>{comingSoon}</h6>
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

export default GameItem