import { useState } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { resumeIntro, resumeTabs } from '../../data/resume';
import ResumeTimeline from './ResumeTimeline';
import ResumeSkills from './ResumeSkills';
import ResumeAbout from './ResumeAbout';
import './Resume.css';

const LIST_COMPONENTS = {
  timeline: ResumeTimeline,
  skills: ResumeSkills,
  about: ResumeAbout,
};

function Resume() {
  const [activeTabId, setActiveTabId] = useState(resumeTabs[0].id);
  const activeTab = resumeTabs.find((tab) => tab.id === activeTabId) ?? resumeTabs[0];
  const ListComponent = LIST_COMPONENTS[activeTab.type];

  return (
    <section className="Resume" id="resume">
      <div className="resume_container">
        <div className="resume_box">
          <h2>{resumeIntro.title}</h2>
          <p className="desc">{resumeIntro.description}</p>

          <div role="tablist" aria-label="Resume sections">
            {resumeTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`resume-tab-${tab.id}`}
                aria-selected={tab.id === activeTabId}
                aria-controls="resume-panel"
                className={`resume-btn${tab.id === activeTabId ? ' active' : ''}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="resume_box">
          <div
            key={activeTab.id}
            id="resume-panel"
            role="tabpanel"
            aria-labelledby={`resume-tab-${activeTab.id}`}
            className={`resume_detail ${activeTab.id} active`}
          >
            <SectionHeading title={activeTab.heading.title} highlight={activeTab.heading.highlight} />
            <p className="desc">{activeTab.description}</p>
            <ListComponent items={activeTab.items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
