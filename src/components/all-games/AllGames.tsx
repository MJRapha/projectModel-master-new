import { useAppSelector } from '../../app/hooks'
import NintendoGamesD from "../../components/nintendo-games/NintendoGamesD";
function AllGames() {
    const psGames = useAppSelector((s) => s.PSGames.PSarticles);
    const xboxGames = useAppSelector((s) => s.XboxGames.Xarticles);
    const nintendoGames = useAppSelector((s) => s.NintendoGames.Narticles);
    let x = [...psGames, ...xboxGames, ...nintendoGames]
    return (
        <div className="d-flex justify-content-center flex-wrap p-1">
            {x.map((g) => (
                <NintendoGamesD {...g} key={g.id} />
            ))}
        </div>
    )
}

export default AllGames