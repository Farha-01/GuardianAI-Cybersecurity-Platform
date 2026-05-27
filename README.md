# 🛡️ GuardianAI — AI-Powered Cybersecurity Threat Detection Platform

GuardianAI is a full-stack AI-powered cybersecurity platform designed to detect phishing attempts, scam messages, malicious content, and suspicious cyber threats using advanced AI analysis and intelligent fallback detection systems.

---

# 🚀 Features

## 🔍 AI Threat Analysis
- Detects phishing attempts
- Identifies scam messages
- Detects credential theft attempts
- Analyzes suspicious cyber activity
- Intelligent risk categorization

---

## 🧠 Hybrid Threat Engine
GuardianAI uses:

### ✅ Gemini AI Engine
Advanced AI-based cybersecurity analysis.

### ✅ Local Fallback Engine
If AI quota/rate limits are exceeded:
- local threat detection still works
- application never crashes
- analysis remains functional

---

## 📊 Threat Risk Visualization
- HIGH / MEDIUM / LOW risk detection
- Dynamic cyber risk meter
- Color-coded security indicators
- Professional threat cards

---

## 🗄️ Scan History System
- SQLite database integration
- Persistent scan storage
- Historical threat tracking
- Cybersecurity activity logging

---

## 🎨 Professional Cyber Dashboard UI
- Glassmorphism UI
- Responsive design
- Tailwind CSS styling
- Framer Motion animations
- Enterprise SOC-inspired interface

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Axios

## Backend
- FastAPI
- Python
- SQLite

## AI
- Google Gemini API

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Farha-01/GuardianAI-Cybersecurity-Platform.git
```

---

## 2️⃣ Backend Setup

```bash
cd Backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate venv:

### Windows
```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run backend:

```bash
uvicorn main:app --reload
```

---

## 3️⃣ Frontend Setup

Open another terminal:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

---



# 📸 Screenshots

## 🖥️ GuardianAI Dashboard

![Dashboard](screenshots/GUARDIANAI.png)

---

## 🚨 High Risk Threat Detection

![High Risk Analysis](screenshots/HIGH%20RISK%20ANALYSIS.png)

![High Risk Analysis Report](screenshots/HIGH%20RISK%20ANALYSIS%20REPORT.png)

![High Risk Recommendations](screenshots/HIGH%20RISK-%20RECOMMENDATIONS.png)

---

## ✅ Low Risk Detection

![Low Risk Analysis](screenshots/LOW%20RISK%20ANALYSIS.png)

![Low Risk Analysis Report](screenshots/LOW%20RISK%20ANALYSIS%20REPORT.png)

![Low Risk Recommendations](screenshots/LOW%20RISK%20-%20RECOMMENDATIONS.png)

---

## ⚠️ Medium Risk Detection

![Medium Risk Analysis](screenshots/MEDIUM%20RISK%20ANALYSIS.png)

![Medium Risk Analysis Report](screenshots/MEDIUM%20RISK%20ANALYSIS%20REPORT.png)

![Medium Risk Recommendations](screenshots/MEDIUM%20RISK-%20RECOMMENDATIONS.png)

---

## 📊 Risk Score Meter

![Risk Score](screenshots/RISK%20SCORE.png)

---

## 🗂️ Threat History

![Threat History](screenshots/THREAT%20HISTORY.png)

---

# 📈 Future Improvements

- 🔗 URL phishing scanner
- 📁 File upload scanning
- 📊 Analytics dashboard
- 🔐 User authentication
- ☁️ Cloud deployment
- 📄 PDF threat reports
- 🧠 Advanced AI models

---

# 🧪 Example Threat Inputs

## HIGH RISK
```txt
URGENT! Your bank account has been suspended. Send OTP immediately.
```

## LOW RISK
```txt
Hey, let's meet tomorrow at 5 PM.
```

---

# 👨‍💻 Author

## Shaik Farha

AI | Cybersecurity | Full-Stack Development

---

# ⭐ Support

If you liked this project:
- Star the repository
- Share feedback
- Connect on LinkedIn

---

# ⚠️ Disclaimer

GuardianAI is developed for educational, research, and cybersecurity awareness purposes only.