import "./styles.css";
import { skillsFromFlattenedProject } from "../../assets";
import { SkillList } from "../../components/SkillList";

export const Home = () => {
  const skills = skillsFromFlattenedProject;

  return (
    <>
      <div className="transition transition-background-home-1"></div>
      <div className="first-background">
        <div className="content">
          <div id="home">
            <div className="column">
              <img alt="Avatar" src="avatar.jpg" />
            </div>
            <div className="column">
              <div>
                <p>Howdy?</p>
                <div>
                  It's <h2>Tuan Truong.</h2>
                  <h2 className="waving-icon">👋</h2>
                </div>
                <p>
                  A sharp mind with unwavering determination and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transition transition-home-1-2"></div>
      <div className="second-background">
        <div className="content">
          <h1>Skills</h1>
          <div id="skills">
            <div className="column">
              <SkillList
                location="home"
                title="Database"
                skills={skills.database}
              />
            </div>
            <div className="column">
              <SkillList
                location="home"
                title="Front End"
                skills={skills.frontend}
              />
            </div>
            <div className="column">
              <SkillList
                location="home"
                title="Back End"
                skills={skills.backend}
              />
            </div>
            <div className="column">
              <SkillList location="home" title="Cloud" skills={skills.cloud} />
            </div>
            <div className="column">
              <SkillList
                location="home"
                title="Testing"
                skills={skills.testing}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="transition-footer"></div>
    </>
  );
};
