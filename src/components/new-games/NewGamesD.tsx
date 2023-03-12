import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleBuying } from '../../features/games/gameSlice';
import css from './NewGames.module.scss'
function NintendoGamesD() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const article = useAppSelector((state) =>
        state.NewGames.articles.find((a) => a.id === id)
    );

    if (!article) {
        //user messed with the url: send him/her back to news
        return <Navigate to="/" />;
    }

    const { nameOfGame, description, image, isGettingBuied } = article;
    //if we got thus far: article is not undefined
    return (
        <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
            <img
                className="w-25 shadow-lg p-3 bg-white rounded"
                src={image}
                alt={nameOfGame}
            />
            <h3 className={css.name}>{nameOfGame}</h3>
            <p className={css.p}>{description}</p>
            <button
                className="btn btn-primary w-10 m-2"
                onClick={() => dispatch(toggleBuying(article.id))}
            >
                {isGettingBuied && "Being Buied"}
                {!isGettingBuied && "Buy"}
            </button>
            <button
                className="btn btn-danger w-10 m-2"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </button>
        </div>
    )
}

export default NintendoGamesD