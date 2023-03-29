import css from './About.module.scss'

const About = () => {
    return (
        <div className={css.myComponent}>
            <h2 className={css.text}>About Us</h2>
            <div className={css.p}>This project is a Demo Version of the Gaming Shop, there you can buy some games only from consoles on this time, The best destination to buy new games to competitive prices. 24 hour support, "best price" guarantee and a flawless UX.</div>
        </div>
    )
}

export default About
