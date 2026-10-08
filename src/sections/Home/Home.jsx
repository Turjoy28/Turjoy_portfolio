import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { profile, socialLinks } from '../../data/profile';
import { asset } from '../../utils/asset';
import './Home.css';

function Home() {
  const { name, roles, bio, image, cv } = profile;

  return (
    <section className="Home" id="home">
      <div className="home-info">
        <h1>{name}</h1>
        <h2>
          I am a
          <span className="text-animate">
            {roles.map((role, index) => (
              <span key={role} style={{ '--i': roles.length - index }} data-text={role}>
                {role}
              </span>
            ))}
          </span>
        </h2>
        <p>{bio}</p>

        <div className="btn-sci">
          <a href={asset(cv)} className="btn" download>
            Download Cv
          </a>
          <div className="sci">
            {socialLinks.map(({ name: network, url, icon }) => (
              <a
                key={network}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={network}
                title={network}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={asset(image)} alt={`${name} portrait`} fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
