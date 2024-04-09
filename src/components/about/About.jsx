import Skills from '../skills/Skills';
import './about.scss';

const About = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="about-title">About</div>
                <p className="about-text">Despite non-traditional education in the field, I have dedicated myself to developing my skills through self-study and personal projects. Eager to contribute my passion and commitment to a dynamic and innovative team.</p>
                <div className="about-title skills">Skills</div>
                <ul className='skills-items'><Skills/></ul>
            </div>
        </section>
    )
}
export default About;