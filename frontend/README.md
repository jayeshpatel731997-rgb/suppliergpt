# 📧 SupplierGPT

An AI-powered email generator for supplier communication. This is an **educational portfolio project** to demonstrate full-stack development and AI integration skills.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://reactjs.org/)

## 🎯 Purpose

**This is a portfolio/learning project** - built to:
- Demonstrate React + FastAPI + AI integration skills
- Showcase problem-solving for supply chain challenges
- Learn about prompt engineering and API integration
- Practice full-stack development

**Not for commercial use** - This is an open-source educational project.

## 💡 Problem Statement

Procurement teams waste 20% of their time chasing suppliers for order updates via email. This tool generates contextual follow-up emails with different tones (formal, polite, urgent) to save time.

## 🚀 Features

- **AI-Powered Email Generation:** Uses Claude API to generate professional supplier emails
- **3 Tone Variations:** Formal, Polite, and Urgent tones with usage guidance
- **Modern UI:** Clean, responsive React interface with gradient design
- **Real-time Generation:** ~3-5 second response time
- **Copy to Clipboard:** One-click email copying

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Axios
- CSS3 (Gradient design)

**Backend:**
- Python 3.8+
- FastAPI
- Anthropic Claude API (Sonnet 4)
- python-dotenv

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python 3.8+
- Anthropic API key ([Get one here](https://console.anthropic.com))

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/jayeshpatel731997-rgb/suppliergpt.git
cd suppliergpt
```

### 2. Backend Setup

**Windows:**
```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

**Mac/Linux:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**Create `.env` file:**
```
ANTHROPIC_API_KEY=your-api-key-here
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

### 4. Run the Application

**Terminal 1 (Backend):**
```bash
cd backend
python main.py
```
Runs on: http://localhost:8000

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```
Runs on: http://localhost:3000

## 🔑 Environment Variables

Create a `backend/.env` file:
```
ANTHROPIC_API_KEY=your-api-key-here
```

**⚠️ Never commit your `.env` file to GitHub!** It's already in `.gitignore`.

## 📸 Screenshots

*Coming soon - will add after deployment*

## 🎓 Learning Outcomes

Through this project, I learned:
- Prompt engineering for consistent AI outputs (JSON formatting)
- React state management and async operations
- FastAPI backend development and CORS handling
- API integration and error handling
- Full-stack application architecture
- Git workflow and version control

## 🚧 Future Enhancements

- [ ] Email history storage
- [ ] Multiple language support
- [ ] Email templates customization
- [ ] Supplier response tracking
- [ ] Batch email generation
- [ ] Export to CSV/PDF
- [ ] Deploy to production (Vercel + Railway)

## 📊 Project Status

- ✅ Core functionality complete
- ✅ AI email generation working
- ✅ UI polished
- ⏳ Deployment in progress
- ⏳ Blog post draft

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

**This project is open source and available for educational purposes.**

## 👤 Author

**Jayesh (Jay) Patel**
- Industrial Engineering Graduate Student, Chicago
- LinkedIn: [linkedin.com/in/jayeshpatel731997](https://www.linkedin.com/in/jayeshpatel731997)
- GitHub: [@jayeshpatel731997-rgb](https://github.com/jayeshpatel731997-rgb)

## 🙏 Acknowledgments

- Built as part of a 12-week AI portfolio project series
- Inspired by real supply chain pain points from Reddit research
- Claude API by Anthropic
- React community

## 📝 Related Projects

Part of my AI for Supply Chain portfolio:
1. **SupplierGPT** (this project) - AI email writer
2. **StockoutLens** (coming soon) - Predictive inventory dashboard
3. **SupplyChainGPT** (coming soon) - RAG-based chatbot

## ⚠️ Disclaimer

This is an educational project for portfolio purposes only. Not intended for commercial use. Users are responsible for their own API usage and costs.

---

**Built with ❤️ for learning and demonstration purposes**
**Following the Naval/Karpathy model: Build in public, teach others, showcase thinking**
```

**Save:** `Ctrl + S`

---

### **1B: Create LICENSE File**

**Create new file: `suppliergpt/LICENSE`**
```
MIT License

Copyright (c) 2026 Jayesh Patel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**Save:** `Ctrl + S`

---

### **1C: Update .gitignore (Make Sure It's Complete)**

**Open `suppliergpt/.gitignore`**

**Make sure it has:**
```
# Python
venv/
__pycache__/
*.pyc
*.pyo
*.pyd
.env
*.log

# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build
build/
dist/
*.egg-info/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Test
test.json