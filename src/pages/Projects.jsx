import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projectsData';

/**
 * Modern Projects Page Component
 * Grid layout with project cards
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <main id="projects">
      <motion.div
        className="projects-header"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-description">
          Discover my realisations and web creations
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-card-image">
              <img src={project.images[0]} alt={project.name} />
              <div className="project-card-overlay">
                <span>Voir le projet</span>
              </div>
            </div>
            <div className="project-card-content">
              <h3>{project.name}</h3>
              <p className="project-card-tech">{project.tech}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="modal-content">
                <h2>{selectedProject.name}</h2>
                <p className="modal-description">{selectedProject.description}</p>
                <p className="modal-tech">
                  <strong>Technologies:</strong> {selectedProject.tech}
                </p>

                <div className="modal-links">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <img src="/images/icons/github.svg" alt="GitHub" />
                    See on GitHub
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <img src="/images/icons/hearts.svg" alt="Live" />
                    See in live
                  </a>
                </div>

                <div className="modal-gallery">
                  {selectedProject.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={selectedProject.alt[index]}
                      className="modal-gallery-image"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects;
