import { Outlet } from 'react-router-dom';
//import { useAppSelector } from '../../app/hooks';
import GamesNav from '../../components/games-nav/GamesNav';
//import css from './GameItem.module.scss';
//import GameItem from './GameItem';

const Games = () => {
    //const { articles, error, loading } = useAppSelector((state) => state.games);
    return (
        <>
            <GamesNav />
            {/* <div className={css.myComponent}>
                <div className={css.askToChoose}>Choose which category you want to see</div>
            </div> */}
            <div className="w-100">
                <Outlet />
            </div>
        </>
    )
}

export default Games