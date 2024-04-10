import './skills.scss';

const Skills = ({skills, clazz}) => {

    const small = clazz ? clazz : "";
    
    return skills.map((skill) => (
        <li className={`skills-item ${small}`} key={skill}>
          <img src={`https://skillicons.dev/icons?i=${skill}`} alt="html" />
        </li>)
    )


}
export default Skills;