/* import { BuiedXboxCard } from '../../features/games/gameXboxSlice'; */
import { XboxGameArticle } from '../../features/games/games';
/* import { useAppDispatch } from '../../app/hooks'; */

const XboxGamesPart = (props: XboxGameArticle) => {
    /* const dispatch = useAppDispatch(); */
    const buy = () => {
        /* dispatch(BuiedXboxCard(props.id)); */
    }
    return (
        <>
            onClick={buy}
        </>
    )
}

export default XboxGamesPart