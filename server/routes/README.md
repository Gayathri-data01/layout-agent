Chat-Based Layout Agent
📌 Project Overview
This is a chat-based layout agent web application.
Users can interact with a design layout using natural language instructions like:
Convert this design to 9:16
Move headline to top
Make headline smaller
Move offer badge higher
The system updates the underlying JSON layout dynamically and displays the updated structure in real time.
🚀 Features
Chat interface for user instructions
Live JSON layout updates
Backend API for processing layout transformations
Support for aspect ratio changes (e.g., 1:1 → 9:16)
Semantic-based element manipulation (headline, badge, product, etc.)
🛠 Tech Stack
Frontend: React + Vite
Backend: Node.js + Express
Communication: REST API
State: React useState
Styling: Inline CSS (for simplicity)
📁 Project Structure

layout-agent/
 ├── client/   # Frontend (React)
 ├── server/   # Backend (Express)
 ├── README.md
 └── APPROACH.md
⚙️ Setup Instructions
1. Clone Project
Bash
git clone <your-repo-link>
cd layout-agent
2. Setup Backend
Bash
cd server
npm install
node index.js
Backend runs on:

http://localhost:3001
3. Setup Frontend
Bash
cd client
npm install
npm run dev
Frontend runs on:

http://localhost:5173
💬 How to Use
Open the app and type commands like:
Convert this design to 9:16
Move headline to top
Make headline smaller
Move offer badge higher
The layout JSON will update automatically.
🧠 Approach Summary
Layout is stored as structured JSON
Each node uses normalized coordinates (nx, ny, nw, nh)
Backend interprets user instructions
Updates are applied using rule-based transformations
Frontend re-renders updated JSON instantly
📌 Notes
No PSD parsing required
No image rendering required
Focus is on JSON transformation + chat interface
👨‍💻 Author
Built as part of AI Engineer Intern POC Assignment