import projectData from '../../data/projectData';
import Skills from '../skills/Skills';

import outerlink from '../../assets/icons/outerlink.svg';
import github from '../../assets/icons/github.svg';

import './projects.scss';


const Projects = () => {

    return (
        <section className='portfolio' id='projects'>
            <div className="portfolio-title">Projects</div>
            <div className='portfolio-projects'>
            {projectData.map(({id, name, description, tech_stack, github_link, deployment_link, img}) => {
                return (
                    <div className='portfolio-project' key={id}>
                    <div className='portfolio-project-overlay'>
                        <div className="portfolio-project-number">0{id}</div>
                        <div className="portfolio-project-name">{name}</div>
                        <p className="portfolio-project-descr">{description}</p>
                        <ul className='portfolio-project-skills'>
                            <Skills skills={tech_stack} clazz={"small"}/>
                        </ul>
                        
                        <div className="portfolio-project-links">
                            <a href={github_link} className='portfolio-project-link'>GitHub
                                <img src={github} alt="github" />
                            </a>
                            <a href={deployment_link} className='portfolio-project-link'>Demo
                                <img src={outerlink} alt="outerlink" />
                            </a>
                        </div>
                    </div>
                    <img src={img} alt="currency project" className="portfolio-project-img"/>
                </div>
                )
                })
            }
            </div>
        </section>
    )
}
export default Projects;