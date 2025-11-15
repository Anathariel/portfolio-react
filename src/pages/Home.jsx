import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import useAurora from '../hooks/useAurora';

/**
 * Home Page Component
 * Premium homepage with advanced effects
 */
const Home = () => {
  const containerRef = useAurora();
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const glowAnimation = {
    initial: {
      boxShadow: "0 0 20px rgba(134, 234, 231, 0.3)",
      scale: 1
    },
    animate: {
      boxShadow: [
        "0 0 20px rgba(134, 234, 231, 0.3)",
        "0 0 40px rgba(134, 234, 231, 0.6)",
        "0 0 20px rgba(134, 234, 231, 0.3)"
      ],
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <main id="homepage">
      {/* Hero Section with Aurora */}
      <section className="hero-section bg--canvas" ref={containerRef}>
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            className="hero-title-wrapper"
            variants={fadeInUp}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              Angéline Gillot
            </motion.h1>
            <motion.div
              className="title-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="hero-subtitle-wrapper"
            variants={fadeInUp}
          >
            <motion.h2 className="hero-subtitle">
              <span className="gradient-text">Web Developer</span>
            </motion.h2>
            <motion.div className="subtitle-underline"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </motion.div>

          <motion.p
          variants={fadeInUp}
          className="hero-description"
        >
          Creator of{" "}
          <span className="highlight-text">cosmic</span> and{" "}
          <span className="highlight-text">immersive</span> web experiences
        </motion.p>

          <motion.div variants={fadeInUp} className="hero-links">
            <motion.a
              href="https://github.com/Anathariel"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/images/icons/github.svg" alt="GitHub" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/angeledev/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/images/icons/linkedin.svg" alt="LinkedIn" />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-cta">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="btn-primary glow-button">
                <span>See my projects</span>
                <motion.span
                  className="btn-icon"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn-secondary">
                Learn more
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating elements decoration */}
        <motion.div className="floating-element floating-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div className="floating-element floating-2"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0.5, 1, 0.5], y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span>Scroll</span>
          <span className="scroll-arrow">↓</span>
        </motion.div>
      </section>

      {/* Quick About Section */}
      <section className="quick-about">
        <motion.div
          className="section-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <h2 className="section-title">
              <span className="title-number">01.</span> About Me
            </h2>
            <motion.div
              className="title-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="about-grid">
            <div className="about-text-card">
              <p className="section-description">
                Full stack developer weaving code, creativity and a touch of{" "}
                <span className="highlight-text">fantasy into immersive digital worlds.</span>.
              </p>
            </div>
            <motion.div className="skills-preview">
              {['React', 'JavaScript', 'SASS', 'Node.js', 'UI/UX','Figma','Vue.js'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured-projects">
        <motion.div
          className="section-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-header">
            <h2 className="section-title">
              <span className="title-number">02.</span> Featured Projects
            </h2>
            <motion.div
              className="title-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.p variants={fadeInUp} className="section-description">
            Discover my last projects and discover my universe
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="cta-link"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/projects" className="btn-primary glow-button">
              <span>See all my project</span>
              <span className="btn-icon">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          className="section-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="cta-decoration"
          >
            <motion.div
              className="decoration-circle"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.h2 variants={fadeInUp} className="cta-title">
            Let's work <span className="gradient-text">together</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="cta-description">
            A project in head ? Let's talk about it and create something wonderful !
          </motion.p>
          <motion.div variants={fadeInUp} className="cta-buttons">
            <motion.a
              href="https://www.linkedin.com/in/angeledev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary glow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Me</span>
              <span className="btn-icon">✉</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
