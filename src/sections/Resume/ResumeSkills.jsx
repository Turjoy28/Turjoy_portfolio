import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/** Skill icons with a tooltip-style label revealed on hover. */
function ResumeSkills({ items }) {
  return (
    <div className="resume_list">
      {items.map(({ name, icon }) => (
        <div className="resume_item" key={name} title={name}>
          <FontAwesomeIcon icon={icon} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

export default ResumeSkills;
