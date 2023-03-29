import { useAppSelector } from '../../app/hooks';
import PSGameItem from '../../routes/games/SonyPSGameItem';
import css from './PS4AndPS5Games.module.scss'

function PS4And5Games() {
    const psGames = useAppSelector((s) => s.PSGames.PSarticles);
    return (
        <div className={css.gridContainer}>
            {psGames.map((g) => (
                <PSGameItem {...g} key={g.id} />
            ))}
        </div>
    )
}

export default PS4And5Games