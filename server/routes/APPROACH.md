Approach Document — Chat-Based Layout Agent
1. Problem Understanding
The goal of this project is to build a chat-based layout editing system where users can modify a design layout using natural language instructions.
Instead of manually editing positions, users can say things like:
“Convert this design to 9:16”
“Move headline to top”
“Make the headline smaller”
The system must:
Understand user intent
Modify a structured JSON layout
Maintain layout consistency
Update UI in real time
2. Core Idea
The entire design is represented as a JSON-based layout tree.
Each element (text, image, shape) contains:
Absolute position (x, y)
Size (width, height)
Normalized values (nx, ny, nw, nh)
Style and semantic meaning
👉 The key idea is:
Use normalized coordinates as the source of truth for all transformations.
3. Architecture
Frontend (React)
Chat interface for user input
Displays live JSON updates
Sends messages to backend API
Backend (Node.js + Express)
Receives user instructions
Applies transformation logic
Returns updated JSON
Communication Flow
User → Frontend → Backend → Process JSON → Return updated layout → UI update
4. Layout Transformation Strategy
Instead of relying fully on AI, I used a hybrid approach:
Rule-Based Logic (Core Engine)
Used for:
Aspect ratio conversion (1:1 → 9:16)
Moving elements (top, center, bottom)
Resizing elements (font size, width, height)
Example:
nx, ny, nw, nh are used to recompute absolute positions
Ensures layout consistency across different screen sizes
Semantic Matching
Elements are identified using:
type (text, image, shape)
content (e.g., "Luxury Comfort")
name (e.g., "headline", "Product.png")
This helps in understanding instructions like:
"Move headline to top"
5. Handling User Instructions
User messages are processed using simple intent detection:
Examples:
If message contains “9:16” → resize artboard
If message contains “headline” → modify text node
If message contains “offer badge” → move shape node
This approach ensures:
Fast response time
Predictable transformations
Easy debugging
6. State Management
Frontend maintains:
layout → current JSON state
messages → chat history
Each backend response updates:
Layout state
Assistant message
This ensures real-time UI updates.
7. Design Decisions
Why JSON-based layout?
Easy to manipulate programmatically
Scalable for design systems
Works well with LLMs or rule-based systems
Why normalized coordinates?
Ensures responsive scaling
Prevents layout breaking on resize
Why hybrid (rules + logic)?
Pure LLM is unpredictable
Pure rules lack flexibility
Hybrid gives balance of control + intelligence
8. Challenges Faced
Handling coordinate conversion for different aspect ratios
Identifying semantic elements from raw JSON
Ensuring follow-up instructions work correctly
Keeping transformations stable and reversible
9. Future Improvements
If more time is available, I would improve:
Integrate GPT/Claude for smarter intent detection
Add undo/redo history for layout changes
Add proper drag-and-drop editor
Improve semantic understanding of design elements
Add visual wireframe rendering with better UI
10. Summary
This project demonstrates:
Chat-based UI development
JSON transformation logic
Layout reasoning using normalized coordinates
Backend + frontend integration
Practical implementation of an AI-assisted design tool
End