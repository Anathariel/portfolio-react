import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bioVersions, skillsData, toolsData, softSkillsBio } from '../data/bioData';

/**
 * Modern About Page Component
 * Redesigned with clean, modern layout
 */
const About = () => {
  const [bioLength, setBioLength] = useState('long');
  const [selectedSkill, setSelectedSkill] = useState('front');

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const bioLengthOptions = [
    { value: 'shortest', label: 'Court' },
    { value: 'shorter', label: 'Moyen' },
    { value: 'long', label: 'Long' },
    { value: 'longest', label: 'Complet' }
  ];

  return (
    <main id="aboutMe">
      {/* Header Section */}
      <motion.div
        className="about-header"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="about-title">À propos de moi</h1>
        <p className="about-subtitle">Développeuse web passionnée par la création</p>
      </motion.div>

      {/* Hero Section with Bio and Portrait */}
      <motion.section
        className="about-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div className="about-portrait-card" variants={fadeInUp}>
          <div className="portrait-image">
            <img src="/images/aboutme/portrait.png" alt="Angéline Gillot" />
          </div>
          <div className="portrait-social">
            <a href="mailto:angeline.gillot@outlook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/mail.svg" alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/angeledev/" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Anathariel" target="_blank" rel="noopener noreferrer">
              <img src="/images/icons/github.svg" alt="GitHub" />
            </a>
          </div>
        </motion.div>

        <motion.div className="about-bio-card" variants={fadeInUp}>
          <div className="bio-controls-svg">
            <img
              src="/images/aboutme/holdMoonPhase.svg"
              alt="Moon Phase Control"
              className="moon-phase-bg"
            />
            <div className="bio-controls-overlay">
              <label className="bio-controls-label">Longueur de la bio</label>
              <div className="bio-options">
                {bioLengthOptions.map((option, index) => (
                  <div key={option.value} className="bio-option">
                    <input
                      type="radio"
                      id={`bio-${option.value}`}
                      name="bio-length"
                      value={option.value}
                      checked={bioLength === option.value}
                      onChange={(e) => setBioLength(e.target.value)}
                      className="bio-radio"
                    />
                    <label htmlFor={`bio-${option.value}`} className="bio-radio-label">
                      <span className={index === 1 || index === 2 ? 'visually-hidden' : ''}>
                        {option.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={bioLength}
              className="bio-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {bioVersions[bioLength]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="about-skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className="section-title" variants={fadeInUp}>
          Compétences
        </motion.h2>

        <motion.div className="skills-grid" variants={fadeInUp}>
          <div className="skills-card">
            <h3>Full Stack</h3>
            <div className="skills-toggle">
              <button
                className={`toggle-btn ${selectedSkill === 'front' ? 'active' : ''}`}
                onClick={() => setSelectedSkill('front')}
              >
                Front-end
              </button>
              <button
                className={`toggle-btn ${selectedSkill === 'back' ? 'active' : ''}`}
                onClick={() => setSelectedSkill('back')}
              >
                Back-end
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedSkill}
                className="skills-description"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {skillsData[selectedSkill]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="skills-card">
            <h3>Outils</h3>
            <p className="skills-description">{toolsData}</p>
          </div>

          <div className="skills-card full-width">
            <h3>Soft Skills</h3>
            <p className="skills-description">{softSkillsBio}</p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default About;
