import { motion } from "framer-motion";

export default function OneTime() {
  const moments = [
    "When you've been liquidated twice this week and still 10x leverage the dip. One time.",
    "When your bag is at -92% but you're still holding, refreshing Dexscreener at 3 AM. One time.",
    "When you're down bad in a poker tournament and shove all-in with 8-9 suited. The flop comes red and your heart skips. One time.",
    "When you're waiting for a mint to start, your wallet lagging, and you're praying to get in before it's gone. One time.",
    "When the casino dealer turns that river card and your rent money's on the line. One time.",
    "When you roll that last spin on Rollbit hoping to hit the bonus. One time.",
    "When you bridge your last SOL to chase a new meme on launch day. One time.",
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid">
          <div style={{ gridColumn: "1 / -1" }}>
            <motion.h2
              className="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              When We Say "One Time"
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginTop: 24 }}
            >
              <p className="p" style={{ marginBottom: 16 }}>
                When do we say "one time"?
              </p>
              <p className="p" style={{ marginBottom: 16 }}>
                In those seconds where logic disappears and luck takes the
                wheel.
              </p>
              <p className="p" style={{ marginBottom: 32 }}>
                When we put everything on the line - praying the chain, the
                cards, or the candles turn our way.
              </p>
            </motion.div>

            <div style={{ marginTop: 40 }}>
              {moments.map((moment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    marginBottom: 20,
                    padding: "16px 20px",
                    borderLeft: "2px solid rgba(199,161,78,0.3)",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "0 8px 8px 0",
                    position: "relative",
                  }}
                >
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background:
                        "linear-gradient(180deg, var(--solana-purple), var(--solana-teal))",
                      borderRadius: "0 2px 2px 0",
                    }}
                  />
                  <p
                    className="p"
                    style={{ margin: 0, fontSize: "16px", lineHeight: 1.5 }}
                  >
                    {moment}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                marginTop: 48,
                textAlign: "center",
                padding: "32px 24px",
                background: "rgba(199,161,78,0.05)",
                borderRadius: 16,
                border: "1px solid rgba(199,161,78,0.15)",
              }}
            >
              <p className="p" style={{ marginBottom: 16, fontSize: "18px" }}>
                It's that single breath before everything flips - the
                split-second where every degen believes, "Maybe this is it."
              </p>

              <div style={{ marginTop: 24 }}>
                <p className="p" style={{ marginBottom: 8, fontWeight: 600 }}>
                  Because every gambler, trader, and dreamer lives for that
                  moment.
                </p>
                <p className="p" style={{ marginBottom: 4 }}>
                  That one chart. That one flip.
                </p>
                <p
                  className="p"
                  style={{
                    margin: 0,
                    fontFamily: "Playfair Display SC, serif",
                    fontSize: "24px",
                    color: "#d6c08d",
                    fontWeight: 700,
                  }}
                >
                  That one time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
