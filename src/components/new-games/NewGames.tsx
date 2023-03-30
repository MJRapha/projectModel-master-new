import { useAppSelector } from '../../app/hooks';
import NewGameItem from '../../routes/games/NewGameItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import css from './NewGames.module.scss'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    betweenDesktopAndTablet: {
        breakpoint: { max: 1200, min: 758 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const NewGames = () => {
    const newGames = useAppSelector((s) => s.NewGames.articles);
    return (
        <div className={css.listCards}>
            <Carousel responsive={responsive}>
                {newGames.map((g) => (
                    <NewGameItem {...g} key={g.id} />
                ))}
            </Carousel>
        </div>
    )
}

export default NewGames