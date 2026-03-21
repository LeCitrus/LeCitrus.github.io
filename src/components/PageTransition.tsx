import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: "easeOut", staggerChildren: 0.10 },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default PageTransition;