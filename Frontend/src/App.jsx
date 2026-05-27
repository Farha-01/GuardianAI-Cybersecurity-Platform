import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // FETCH HISTORY

  const fetchHistory = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/history"
      );

      setHistory(response.data);

    } catch (error) {

      console.error("History Error:", error);

    }

  };

  useEffect(() => {

    fetchHistory();

  }, []);

  // ANALYZE THREAT

  const analyzeThreat = async () => {

    if (!text.trim()) return;

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          text: text,
        }
      );

      setResult(response.data);

      // REFRESH HISTORY
      fetchHistory();

    } catch (error) {

      console.error(error);

      setResult({
        threat_level: "ERROR",
        summary: "Backend temporarily unavailable.",
        indicators: [],
        recommendations: []
      });

    }

    setLoading(false);

  };

  // CLEAR INPUT

  const clearInput = () => {

    setText("");
    setResult(null);

  };

  // RISK SCORE

  const getRiskScore = () => {

    if (!result) return 20;

    if (result.threat_level?.includes("HIGH")) {
      return 92;
    }

    if (result.threat_level?.includes("MEDIUM")) {
      return 58;
    }

    return 18;

  };

  // TEXT COLOR

  const getThreatColor = () => {

    if (!result) return "text-green-400";

    if (result.threat_level?.includes("HIGH")) {
      return "text-red-400";
    }

    if (result.threat_level?.includes("MEDIUM")) {
      return "text-yellow-400";
    }

    return "text-green-400";

  };

  // BADGE STYLING

  const getThreatBadge = () => {

    if (!result) {
      return "bg-green-500/20 text-green-400 border-green-500";
    }

    if (result.threat_level?.includes("HIGH")) {
      return "bg-red-500/20 text-red-400 border-red-500";
    }

    if (result.threat_level?.includes("MEDIUM")) {
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500";
    }

    return "bg-green-500/20 text-green-400 border-green-500";

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >

          <h1 className="text-6xl md:text-7xl font-extrabold text-cyan-400 tracking-wider drop-shadow-lg">
            GuardianAI
          </h1>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto">
            AI-powered cybersecurity assistant for phishing detection,
            scam analysis, malicious message inspection,
            and intelligent cyber threat analysis.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-7 shadow-2xl"
          >

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              Threat Analyzer
            </h2>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste suspicious message, phishing email, scam URL, or malicious content here..."
              className="w-full h-64 bg-slate-950 border border-slate-700 rounded-2xl p-5 text-white outline-none focus:border-cyan-400 transition duration-300 resize-none"
            />

            <div className="flex flex-wrap gap-4 mt-6">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={analyzeThreat}
                className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-2xl font-bold shadow-lg transition"
              >
                {loading ? "Analyzing..." : "Analyze Threat"}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearInput}
                className="bg-red-500 hover:bg-red-600 px-7 py-3 rounded-2xl font-bold shadow-lg transition"
              >
                Clear
              </motion.button>

            </div>

          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-7 shadow-2xl"
          >

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              Security Status
            </h2>

            <div className="space-y-5">

              <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">

                <p className="text-slate-400 mb-2">
                  Threat Engine
                </p>

                <p className="text-green-400 text-xl font-bold">
                  ACTIVE
                </p>

              </div>

              <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">

                <p className="text-slate-400 mb-2">
                  AI Status
                </p>

                <p className="text-cyan-400 text-xl font-bold">
                  Gemini Integrated
                </p>

              </div>

              <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">

                <p className="text-slate-400 mb-2">
                  Protection Level
                </p>

                <p className="text-yellow-400 text-xl font-bold">
                  Advanced
                </p>

              </div>

              {/* RISK METER */}

              <div className="bg-slate-950 border border-slate-700 rounded-2xl p-5">

                <div className="flex items-center justify-between mb-3">

                  <p className="text-slate-400">
                    Cyber Threat Score
                  </p>

                  <p className={`font-bold text-2xl ${getThreatColor()}`}>
                    {getRiskScore()}%
                  </p>

                </div>

                <div className="w-full bg-slate-800 rounded-full h-6 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${getRiskScore()}%` }}
                    transition={{ duration: 1 }}
                    className="h-6 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
                  />

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-green-400 text-sm">
                    LOW
                  </span>

                  <span className="text-yellow-400 text-sm">
                    MEDIUM
                  </span>

                  <span className="text-red-400 text-sm">
                    HIGH
                  </span>

                </div>

                <p className={`mt-4 font-bold text-lg ${getThreatColor()}`}>
                  {result
                    ? result.threat_level
                    : "Monitoring"}
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* HISTORY PANEL */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-7 shadow-2xl"
        >

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold text-cyan-300">
              Recent Threat History
            </h2>

            <p className="text-slate-400">
              {history.length} scans stored
            </p>

          </div>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

            {history.length > 0 ? (

              history.map((item) => (

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`rounded-2xl p-5 border shadow-lg
                    ${
                      item.threat_level.includes("HIGH")
                        ? "bg-red-500/10 border-red-500/30"
                        : item.threat_level.includes("MEDIUM")
                        ? "bg-yellow-500/10 border-yellow-500/30"
                        : "bg-green-500/10 border-green-500/30"
                    }
                  `}
                >

                  <div className="flex items-center justify-between flex-wrap gap-4 mb-3">

                    <span className={`px-4 py-1 rounded-full text-sm font-bold border
                      ${
                        item.threat_level.includes("HIGH")
                          ? "bg-red-500/20 text-red-400 border-red-500"
                          : item.threat_level.includes("MEDIUM")
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500"
                          : "bg-green-500/20 text-green-400 border-green-500"
                      }
                    `}>
                      {item.threat_level}
                    </span>

                    <span className="text-slate-400 text-sm">
                      {item.created_at}
                    </span>

                  </div>

                  <p className="text-slate-300 mb-3">
                    {item.summary}
                  </p>

                  <div className="bg-black/30 rounded-xl p-3 border border-slate-700">

                    <p className="text-slate-400 text-sm mb-1">
                      Scanned Content:
                    </p>

                    <p className="text-white break-words">
                      {item.scanned_text}
                    </p>

                  </div>

                </motion.div>

              ))

            ) : (

              <div className="text-slate-400">
                No scan history available.
              </div>

            )}

          </div>

        </motion.div>

        {/* RESULTS */}

        {result && (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-7 shadow-2xl"
          >

            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">

              <h2 className="text-4xl font-bold text-cyan-300">
                Threat Intelligence Report
              </h2>

              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`px-5 py-2 rounded-full font-bold border shadow-lg ${getThreatBadge()}`}
              >
                {result.threat_level}
              </motion.span>

            </div>

            {/* SUMMARY */}

            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 mb-6">

              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                Threat Summary
              </h3>

              <p className="text-slate-300 leading-8 text-lg">
                {result.summary}
              </p>

            </div>

            {/* INDICATORS */}

            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 mb-6">

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Detected Indicators
              </h3>

              <ul className="space-y-3">

                {result.indicators?.length > 0 ? (

                  result.indicators.map((item, index) => (

                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      key={index}
                      className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-3 text-slate-300"
                    >
                      ⚠️ {item}
                    </motion.li>

                  ))

                ) : (

                  <li className="text-slate-400">
                    No major indicators detected.
                  </li>

                )}

              </ul>

            </div>

            {/* RECOMMENDATIONS */}

            <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6">

              <h3 className="text-2xl font-bold text-green-400 mb-4">
                Recommended Actions
              </h3>

              <ul className="space-y-3">

                {result.recommendations?.length > 0 ? (

                  result.recommendations.map((item, index) => (

                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      key={index}
                      className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 text-slate-300"
                    >
                      ✅ {item}
                    </motion.li>

                  ))

                ) : (

                  <li className="text-slate-400">
                    No recommendations available.
                  </li>

                )}

              </ul>

            </div>

          </motion.div>

        )}

      </div>

    </div>

  );

}

export default App;