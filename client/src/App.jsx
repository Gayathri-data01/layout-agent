import { useState } from "react";
import initialLayout from "./data/initialLayout.json";

function App() {

  const [layout, setLayout] = useState(initialLayout);

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {

    if (!input) return;

    const userMessage = {
      role: "user",
      content: input
    };

    setMessages((prev) => [...prev, userMessage]);

    try {

      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: input,
          layout
        })
      });

      const data = await response.json();

      setLayout(data.updatedLayout);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.explanation
        }
      ]);

    } catch (error) {

      console.log(error);

    }

    setInput("");
  };

  return (

    <div
      style={{
        display: "flex",
        height: "100vh"
      }}
    >

      {/* LEFT SIDE CHAT */}

      <div
        style={{
          width: "40%",
          padding: "20px",
          borderRight: "1px solid #ccc"
        }}
      >

        <h2>Chat Area</h2>

        <div
          style={{
            height: "80%",
            border: "1px solid #ddd",
            padding: "10px",
            overflowY: "auto",
            marginBottom: "10px"
          }}
        >

          {messages.map((msg, index) => (

            <div
              key={index}
              style={{
                marginBottom: "10px"
              }}
            >
              <strong>{msg.role}:</strong> {msg.content}
            </div>

          ))}

        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your instruction..."
          style={{
            width: "70%",
            padding: "10px"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px",
            marginLeft: "10px"
          }}
        >
          Send
        </button>

      </div>

      {/* RIGHT SIDE JSON */}

      <div
        style={{
          width: "60%",
          padding: "20px",
          overflow: "auto"
        }}
      >

        <h2>Updated JSON</h2>

        <pre>
          {JSON.stringify(layout, null, 2)}
        </pre>

      </div>

    </div>
  );
}

export default App;