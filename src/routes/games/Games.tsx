import { Outlet } from 'react-router-dom';
//import { useAppSelector } from '../../app/hooks';
import GamesNav from '../../components/games-nav/GamesNav';
import './GameItem.module.scss';
//import GameItem from './GameItem';

const Games = () => {
    //const { articles, error, loading } = useAppSelector((state) => state.games);
    return (
        <>
            <GamesNav />
            <div className="my-component">

                <Outlet />
            </div>
        </>
    )
}

export default Games