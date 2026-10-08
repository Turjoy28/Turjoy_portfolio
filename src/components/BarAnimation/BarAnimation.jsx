import './BarAnimation.css';

const BAR_COUNT = 6;

/** Full-screen background bars that slide down on page load. */
function BarAnimation() {
  return (
    <div className="bar-animation" aria-hidden="true">
      {Array.from({ length: BAR_COUNT }, (_, index) => (
        // Stagger delay runs right-to-left: --i goes 6, 5, ... 1
        <div key={index} className="bar" style={{ '--i': BAR_COUNT - index }} />
      ))}
    </div>
  );
}

export default BarAnimation;
