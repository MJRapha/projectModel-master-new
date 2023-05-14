import { useAppSelector } from '../../app/hooks';
import SoonGameItem from '../../routes/games/SoonGameItem';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import css from './SoonGames.module.scss'

//responsive for the multi carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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

const SoonGames = () => {
    //using hook of selector
    const comingSoonGames = useAppSelector((s) => s.SoonGames.articles);
    return (
        <div className={css.listCards}>
            {/* Multi Carousel */}
            <Carousel responsive={responsive}>
                {comingSoonGames.map((g) => (
                    <SoonGameItem {...g} key={g.id} />
                ))}
            </Carousel>
        </div>
    )
}

export default SoonGames