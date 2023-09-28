import "./styles.css";
import { SkillListProps } from "../../types/skill-list-props";

export const SkillList = (props: SkillListProps) => {
  return (
    <>
      {props.title && <h3>{props.title}</h3>}
      <div className={`${props.location}-skill-list`}>
        {props.skills?.map((item) => (
          <div key={item} className={`${props.location}-skill-card`}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
