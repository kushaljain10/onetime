import { motion } from "framer-motion";

export default function Community() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid">
          <div style={{ gridColumn: "1 / -1" }}>
            <h2 className="h2">The Cult of the One Time.</h2>
            <p className="p" style={{ marginTop: 12 }}>
              We reload after rugs. We pray into the void. We still believe.
              Join the believers - not for luck, but for destiny.
            </p>
          </div>

          <div
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 18,
            }}
          >
            <motion.a
              className="btn"
              href="https://x.com/i/communities/1982030521283567649"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              Join on X
            </motion.a>
            {/* <motion.a
              className="btn"
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              Enter Telegram
            </motion.a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
