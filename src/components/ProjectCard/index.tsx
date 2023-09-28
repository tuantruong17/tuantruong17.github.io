import "./styles.css";
import { Project } from "../../types";
import { useState } from "react";
import { SkillList } from "../SkillList";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="project-card"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className={`flip ${isHovered ? "front" : "back"}`}>
          {isHovered ? (
            <>
              <h3>Impacts</h3>
              {project.impact.map((impact) => (
                <div key={impact?.toString()}>- {impact}</div>
              ))}
              <h3>Skills</h3>
              <SkillList location="work" skills={Object.values(project.skills).flat()} />
            </>
          ) : (
            <>
              <div style={{ textAlign: "center" }}>
                <h2>{project.name}</h2>
                <p>{project.time}</p>
              </div>
              <p>{project.description}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
