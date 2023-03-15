import SoonGames from "../../components/coming-soon-games/SoonGames"
import NewGames from "../../components/new-games/NewGames"
import css from './HomePage.module.scss'
import '../../videos/GhostofTsushimaDirectorsCutAccoladesTrailerPS5PS4.mp4'


const HomePage = () => {
    return (
        <>
            <video id="background-video" loop autoPlay>
                <source src="" type="video/mp4" />
                {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
                Your browser does not support the video tag.
            </video>
            <div className="w-100 shadow-lg border-light border-5 rounded p-2 m-2 d-flex flex-column align-items-center text-decoration-none">
                <h3 className={css.p}>New Games</h3>
                <NewGames />
            </div>
            <div className="w-100 shadow-lg border-light border-5 rounded p-2 m-2 d-flex flex-column align-items-center text-decoration-none">
                <h3 className={css.p}>Coming Soon</h3>
                <SoonGames />
            </div>
        </>
    )
}

export default HomePage