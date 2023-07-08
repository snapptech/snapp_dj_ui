import classNames from "classnames";
import { motion } from "framer-motion";

export const LoadingSpinner = ({ className }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={classNames(className, "lds-default flex")}
  >
    {new Array(12).fill(null).map((_, i) => (
      <div key={i} />
    ))}
  </motion.div>
);
