import { Fragment } from 'react';

/** Renders a string, or an array of strings separated by line breaks. */
const renderValue = (value) =>
  Array.isArray(value)
    ? value.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))
    : value;

/** Label / value pairs for the About Me tab. */
function ResumeAbout({ items }) {
  return (
    <div className="resume_list">
      {items.map(({ label, value }) => (
        <div className="resume_item" key={label}>
          <p>
            {label}
            <span>{renderValue(value)}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResumeAbout;
