import { useAppSelector } from '../../app/hooks';
import NintendoGameItem from '../../routes/games/NintendoGameItem';

const NintendoGames = () => {
    const nintendoGames = useAppSelector((s) => s.NintendoGames.Narticles);
    return (
        <div className="d-flex justify-content-center flex-wrap p-1">
            {nintendoGames.map((g) => (
                <NintendoGameItem {...g} key={g.id} />
            ))}
        </div>
    )
}

export default NintendoGames