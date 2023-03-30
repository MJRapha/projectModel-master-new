import SoonGames from "../../components/coming-soon-games/SoonGames"
import NewGames from "../../components/new-games/NewGames"
import css from './HomePage.module.scss'
import Footer from "../../components/footer/Footer"


const HomePage = () => {
    return (
        <>
            <div style={{ backgroundColor: "rgba(10, 8, 58, 0.913)" }}>
                <div className="w-99.8 shadow-lg border-light border-5 rounded p-2 mb-2 d-flex flex-column align-items-center text-decoration-none" style={{ backgroundColor: "#0b2059" }}>
                    <h3 className={css.p}>New Games</h3>
                    <NewGames />
                </div>
                <div className="w-99.8 shadow-lg border-light border-5 rounded p-2 mt-2 d-flex flex-column align-items-center text-decoration-none" style={{ backgroundColor: "#0b2059" }}>
                    <h3 className={css.p}>Coming Soon</h3>
                    <SoonGames />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage