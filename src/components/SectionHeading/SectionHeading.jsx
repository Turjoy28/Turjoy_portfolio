/**
 * Section title with a highlighted word, e.g. "My <span>Services</span>".
 * Styling comes from the global `.heading` class.
 */
function SectionHeading({ title, highlight, className = '' }) {
  return (
    <h2 className={`heading ${className}`.trim()}>
      {title}
      <span>{highlight}</span>
    </h2>
  );
}

export default SectionHeading;
