/* import { BuiedSonyCard } from '../../features/games/gameSonySlice'; */
import { SonyGameArticle } from '../../features/games/games';
/* import { useAppDispatch } from '../../app/hooks'; */

const SonyGamesPart = (props: SonyGameArticle) => {
    /* const dispatch = useAppDispatch(); */
    const buy = () => {
        /* dispatch(BuiedSonyCard(props.id)); */
    }
    return (
        <>
            onClick={buy}
        </>
    )
}

export default SonyGamesPart