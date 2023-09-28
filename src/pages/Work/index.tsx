import "./styles.css";
import { projects } from "../../assets";
import { ProjectCard } from "../../components";

export const Work = () => {
  return (
    <>
      <div className="transition transition-background-work-1"></div>
      <div className="work-background">
        <div className="content">
          <div style={{ padding: 24 }}>
            Below are my projects. Sadly, most of them require VPN to access,
            but I will try my best to showcase my products.
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
      <div className="transition transition-footer"></div>
    </>
  );
};
