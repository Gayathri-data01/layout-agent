import { useState } from "react";
import initialLayout from "../data/initialLayout.json";

export function useLayoutAgent() {
  const [layout, setLayout] = useState(initialLayout);

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  return {
    layout,
    setLayout,
    messages,
    setMessages,
    loading,
    setLoading
  };
}