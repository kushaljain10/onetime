import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Prayer() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setToggle((t) => !t), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section" style={{ position: "relative" }}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(600px 200px at 50% 0%, rgba(199,161,78,0.12), transparent 70%)",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div
          style={{ minHeight: "40vh", display: "grid", placeItems: "center" }}
        >
          <AnimatePresence mode="wait">
            {toggle ? (
              <motion.div
                key="line1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="h2" style={{ textAlign: "center" }}>
                  All it takes is one time.
                </h2>
              </motion.div>
            ) : (
              <motion.div
                key="line2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="h2" style={{ textAlign: "center" }}>
                  But it better be this one.
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="footer">$ONETIME | Manifested by Believers</div>
      </div>
    </section>
  );
}
