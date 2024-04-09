import './skills.scss';

const Skills = () => {
    const skills = ["html", "css", "scss", "js", "ts", "react", "redux"];
    
    return skills.map((skill) => (
        <li className="skills-item" key={skill}>
          <img src={`https://skillicons.dev/icons?i=${skill}`} alt="html" />
        </li>)
    )


}
export default Skills;