import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Moment() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="grid" style={{ alignItems: "center" }}>
          <div className="moment-text">
            <h2 className="h2">Between Hope and Outcome.</h2>
            <p className="p" style={{ marginTop: 12 }}>
              Every degen knows the whisper. The breath before the flip. The
              soft prayer - “Come on, one time.” <b>$ONETIME</b> is that moment,
              immortalised on-chain. Not luck. Faith. Not randomness -
              alignment.
            </p>
          </div>
          <div className="moment-image">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%", maxWidth: "900px" }}
            >
              <div className="image-frame">
                <img
                  src="/hope_outcome.png"
                  alt="Between Hope and Outcome"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
