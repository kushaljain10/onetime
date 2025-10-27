import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export default function Hero() {
  const address = "thisisaplaceholdercontractaddresspump";
  const displayAddress = `${address.slice(0, 10)}…${address.slice(-10)}`;
  const [copied, setCopied] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // noop
    }
  };

  return (
    <section className="section hero" style={{ position: "relative" }}>
      <div className="container">
        <div className="grid" style={{ alignItems: "center" }}>
          <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              All it takes is one time.
            </motion.h1>
            <motion.p
              className="p"
              style={{ marginTop: 14 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A moment between logic and luck. <b>$ONETIME</b> - belief,
              distilled into a token.
            </motion.p>
          </div>

          <div
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              justifyContent: "center",
              padding: "40px 0",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* <div
                className="aura-ring glow-ring"
                style={{
                  width: "clamp(160px,45vw,420px)",
                  height: "clamp(160px,45vw,420px)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow:
                    "inset 0 0 20px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.6), 0 0 60px rgba(153,69,255,0.12)",
                }}
              >
                <img
                  src="/onetime_logo.png"
                  alt="$ONETIME logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div> */}
            </motion.div>
          </div>

          <div
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <motion.button
              className="btn"
              href="https://x.com/i/communities/1982030521283567649"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              Manifest on X
            </motion.button>
            <motion.button
              className="btn"
              href="https://dexscreener.com/solana"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              Dexscreener
            </motion.button>
          </div>

          {/* Contract address + copy */}
          <div
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
                maxWidth: isDesktop ? 1000 : 680,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                border: "1px solid rgba(199,161,78,0.35)",
                borderRadius: 12,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <code
                aria-label={address}
                title={address}
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
                  fontSize: 14,
                  color: "#d7d7d7",
                  letterSpacing: "0.03em",
                  overflow: isDesktop ? "visible" : "hidden",
                  textOverflow: isDesktop ? "clip" : "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {isDesktop ? address : displayAddress}
              </code>
              <motion.button
                className="btn"
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                style={{ padding: "8px 12px" }}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span style={{ marginLeft: 6 }}>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span style={{ marginLeft: 6 }}>Copy</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
