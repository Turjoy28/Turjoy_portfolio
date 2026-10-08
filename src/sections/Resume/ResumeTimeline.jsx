/** Experience / Education cards. `year` and `company` are optional. */
function ResumeTimeline({ items }) {
  return (
    <div className="resume_list timeline_list">
      {items.map(({ year, title, company, description, points, links }) => (
        <div className="resume_item timeline_item" key={title}>
          <div className="timeline_header">
            <div className="timeline_title_group">
              <h3>{title}</h3>
              {company && <p className="company">{company}</p>}
            </div>
            {year && <span className="year">{year}</span>}
          </div>

          {description && <p className="timeline_desc">{description}</p>}

          {Array.isArray(points) && points.length > 0 && (
            <ul className="resume_points">
              {points.map((pt, index) => (
                <li key={index}>{pt}</li>
              ))}
            </ul>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="resume_links">
              {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ResumeTimeline;

