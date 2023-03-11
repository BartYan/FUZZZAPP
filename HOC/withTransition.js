import { motion } from "framer-motion";
import styles from '/styles/Home.module.scss';

const withTransition = (OriginalComponent) => {
  return () => (
    <>
      {/* <OriginalComponent />
      <motion.div
        className={styles.slide_in}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.slide_out}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      /> */}
       <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <OriginalComponent />
      </motion.div>

    </>
  );
};

export default withTransition;