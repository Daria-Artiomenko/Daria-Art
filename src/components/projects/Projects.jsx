// import projectData from '../../data/projectData';
// import Skills from '../skills/Skills';
import currency from '../../assets/img/projects/currency.webp';
import './projects.scss';

const Projects = () => {
    return (
        <section className='portfolio'>
            <div className="portfolio-title">Projects</div>
            <div className='portfolio-projects'>
                <div className='portfolio-project'>
                    <div className='portfolio-project-overlay'>
                        <div className="portfolio-project-number">01</div>
                        <div className="portfolio-project-name">Currencies and coins</div>
                        <p className="portfolio-project-descr">Project based on APIs - currencyapi and coinapi. In this web application, you can find out the current exchange rates, convert currencies, see the dynamics of currency changes over the period, as well as get acquainted with additional information about bank cards.</p>
                        {/* <Skills/> */}
                        <a href="#">GitHub</a>
                        <a href="#">Demo</a>
                    </div>
                    <img src={currency} alt="currency project" className="portfolio-project-img"/>
                </div>
            </div>
        </section>
    )
}
export default Projects;