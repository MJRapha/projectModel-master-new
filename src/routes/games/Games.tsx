import { Outlet } from 'react-router-dom';
import GamesNav from '../../components/games-nav/GamesNav';


const Games = () => {
    return (
        <>
            <GamesNav />
            <div className="w-100">
                <Outlet />
            </div>
        </>
    )
}

export default Games