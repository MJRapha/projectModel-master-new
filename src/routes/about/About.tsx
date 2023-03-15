import css from './About.module.scss'

function About() {
    return (
        <>
            <div className={css.myComponent}>
                <h2 className={css.text}>About Us </h2>
                <div className={css.p}>This project is a Demo Version of the Gaming Shop, there you can buy some games only from consoles on this time</div>
            </div>
        </>
    )
}

export default About
