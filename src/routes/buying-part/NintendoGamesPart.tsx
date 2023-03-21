/* import { BuiedNintendoCard } from '../../features/games/gameNintendoSlice'; */
import { NintendoGameArticle } from '../../features/games/games';
/* import { useAppDispatch } from '../../app/hooks'; */

const NintendoGamesPart = (props: NintendoGameArticle) => {
    /* const dispatch = useAppDispatch(); */
    const buy = () => {
        /* dispatch(BuiedNintendoCard(props.id)); */
    }
    return (
        <>
            onClick={buy}
        </>
    )
}

export default NintendoGamesPart