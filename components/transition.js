import { motion } from "framer-motion";
import styles from '/styles/Home.module.scss';

const Transition  = ({children}) => {
  return (
    <>
  {/* //   <motion.div
  //   initial={{ x: 300, opacity: 0 }}
  //   animate={{ x: 0, opacity: 1 }}
  //   exit={{ x: 300, opacity: 0 }}
  //   transition={{
  //     type: "spring",
  //     stiffness: 260,
  //     damping: 20,
  //   }}
  // > */}
  {/* // </motion.div> */}
  <motion.div
  className={styles.slide_in}
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 0 }}
  exit={{ scaleX: 1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>
{children}
<motion.div
  className={styles.slide_out}
  initial={{ scaleX: 1 }}
  animate={{ scaleX: 0 }}
  exit={{ scaleX: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>
</>
  )
}

export default Transition;