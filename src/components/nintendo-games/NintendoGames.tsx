import { useAppSelector } from '../../app/hooks';
import NintendoGameItem from '../../routes/games/NintendoGameItem';
import css from './NintendoGames.module.scss'

const NintendoGames = () => {
    const nintendoGames = useAppSelector((s) => s.NintendoGames.Narticles);
    return (
        <div className={css.gridContainer}>
            {nintendoGames.map((g) => (
                <NintendoGameItem {...g} key={g.id} />
            ))}
            {/* {[1, 2, 3, 4, 5, 6].map((n) => (
                <div>paragraph{n}</div>
            ))} */}
        </div>
    )
}

export default NintendoGames