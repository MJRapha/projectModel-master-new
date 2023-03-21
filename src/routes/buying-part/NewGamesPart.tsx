/* import { BuiedCard } from '../../features/games/gameSlice'; */
import { NewGameArticle } from '../../features/games/games';
/* import { useAppDispatch } from '../../app/hooks'; */

const NewGamesPart = (props: NewGameArticle) => {
    /* const dispatch = useAppDispatch(); */
    const buy = () => {
        /* dispatch(BuiedCard(props.id)); */
    }
    return (
        <>
            onClick={buy}
        </>
    )
}

export default NewGamesPart