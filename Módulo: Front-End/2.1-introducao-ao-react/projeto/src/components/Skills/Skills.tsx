import * as React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "Styled Components",
    "Bootstrap",
    "CSS RAIZ",
    "Tailwind",
    "PHP",
  ];
  return (
    <div>
      <p>Habiliadades</p>
      <ul>
        As habilidades vão vir aqui
        {skills.map((skills) => (
          <li>{skills}</li>
        ))}
      </ul>
    </div>
  );
}
export default Skills;
