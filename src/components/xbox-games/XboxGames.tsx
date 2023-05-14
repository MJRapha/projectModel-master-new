import { useAppSelector } from '../../app/hooks';
import XboxGameItem from '../../routes/games/XboxGameItem';
import css from './XboxGames.module.scss'

const XboxGames = () => {
    //using hook of selector
    const xboxGames = useAppSelector((s) => s.XboxGames.Xarticles);
    return (
        <div className={css.gridContainer}>
            {xboxGames.map((g) => (
                <XboxGameItem {...g} key={g.id} />
            ))}
        </div>
    )
}

export default XboxGames