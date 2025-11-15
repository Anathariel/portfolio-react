import { motion } from 'framer-motion';

/**
 * PageTransition Component
 * Wraps page content with smooth cosmic transitions
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
