import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

function Query() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copyConfirmation, setCopyConfirmation] = useState(null);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "You are a legal chatbot for the Bhartiya Nyay Sanhita. Provide concise bullet-point answers with: Relevant Law, Interpretation, Punishment also add Disclaimer that given info is for information purpose please consult legal advisor after user given legal query" }]
      },
      {
        role: "model",
        parts: [{ text: "I understand my role as a legal chatbot and I will respond accordingly." }]
      },
    ],
  });

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const response = await chat.sendMessage(input);
      const formattedResponse = formatResponse(response.response.text());

      setMessages((prev) => [
        ...prev,
        { role: "model", text: formattedResponse, rawText: response.response.text() },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatResponse = (responseText) => {
    return responseText
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*\s/g, "<li>")
      .replace(/\n/g, "</li><li>")
      .replace(/Relevant Law:/g, "<br><strong>Relevant Law:</strong><br>") // Add space before and after "Relevant Law"
      .replace(/Interpretation:/g, "<br><strong>Interpretation:</strong><br>") // Add space before and after "Interpretation"
      .replace(/Punishment:/g, "<br><strong>Punishment:</strong><br>")
      .replace(/Disclaimer:/g, "<br><strong>Disclaimer:</strong><br>")
      ;
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyConfirmation("Copied!");
      setTimeout(() => setCopyConfirmation(null), 2000); // Clear confirmation after 2 seconds
    });
  };

  return (
    <div style={{ backgroundColor: '#111827', minHeight: '88vh', display: 'flex', flexDirection: 'column' }}>
      <div className="max-w-5xl mx-auto p-4 slide-in" style={{ backgroundColor: '#111827', color: 'white', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h1 className="text-2xl font-bold mb-4 text-center">LEAP Chatbot - Bhartiya Nyay Sanhita</h1>
        <p className="text-center text-gray-400 mb-4">Answers Criminal BNS Sections Queries</p>
        <ul className="flex-grow overflow-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
          {messages.map((msg, index) => (
            <li key={index} className={`mb-5 ${msg.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-md ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
              {msg.role === "model" && (
                <div style={{ display: 'inline-block' }}>
                  <button
                    onClick={() => handleCopy(msg.rawText)}
                    className="ml-2 mt-3 p-1 rounded-md bg-gray-500 text-white"
                  >
                    <img src="https://api.iconify.design/material-symbols:content-copy.svg?color=white" alt="copy" style={{ width: '20px', height: '20px' }} />
                  </button>
                  {copyConfirmation && <span className="ml-2">{copyConfirmation}</span>}
                </div>
              )}
            </li>
          ))}
          {loading && (
            <li className="text-left mb-5">
              <span className="inline-block p-2 rounded-md bg-gray-400 text-black">
                <div className="spinner"></div>
              </span>
            </li>
          )}
        </ul>
        <form onSubmit={handleSendMessage} className="mt-4 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full text-black mr-2"
            placeholder="Ask a legal question..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
      <style>{`
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-left-color: #ffffff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Query;