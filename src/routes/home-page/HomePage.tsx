import SoonGames from "../../components/coming-soon-games/SoonGames"
import NewGames from "../../components/new-games/NewGames"
import css from './HomePage.module.scss'


const HomePage = () => {
    return (
        <>
            <div className="w-75 shadow-lg border-light border-5 rounded p-2 m-2 d-flex flex-column align-items-center text-decoration-none">
                <h3 className={css.p}>New Games</h3>
                <NewGames />
            </div>
            <div className="w-75 shadow-lg border-light border-5 rounded p-2 m-2 d-flex flex-column align-items-center text-decoration-none">
                <h3 className={css.p}>Coming Soon</h3>
                <SoonGames />
            </div>
        </>
    )
}

export default HomePage