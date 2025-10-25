import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shimmerY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="grid" style={{ alignItems: "stretch" }}>
          <div style={{ gridColumn: "1 / -1" }}>
            <div className="marble" style={{ padding: "40px 24px" }}>
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(199,161,78,0.06), transparent 60%)",
                  pointerEvents: "none",
                  y: shimmerY,
                }}
              />
              <h2 className="h2" style={{ marginBottom: 16 }}>
                There are traders. There are gamblers. And then there are
                believers.
              </h2>
              <p className="p" style={{ marginBottom: 16 }}>
                Believers don’t chase. They manifest. They don’t need 100 flips
                - just one. <b>$ONETIME</b> isn’t a promise; it’s a conviction.
                A collective ritual written in code.
              </p>
              <p
                className="p"
                style={{
                  fontFamily: "Playfair Display SC, serif",
                  fontSize: "22px",
                  color: "#d6c08d",
                }}
              >
                “This time, it’s not chance. It’s alignment.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
