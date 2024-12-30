import React, { useState, useRef, useEffect } from 'react'

import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';

function Query() {
  const [apiKey, setApiKey] = useState("xai-TilrY6XtZiOFCDlauPUSehccBsTR9G1mdbAPUiLqLmUJtd62d5IN0pXBfBQ46ZE2WbuYx4X3kKkEXw7D");
  const [systemRoleMessage, setSystemRoleMessage] = useState(
    localStorage.getItem("systemRoleMessage") || "As a legal chatbot specializing in the Bhartiya Nyay Sanhita, you are tasked with providing..."
  );
  const [chatHistory, setChatHistory] = useState(JSON.parse(localStorage.getItem("chatHistory")) || []);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const chatMessagesRef = useRef(null);

  // Loading spinner state
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };
  const getBotResponseFromChatGPT = async (userMessage) => {
    const apiUrl = "https://api.x.ai/v1/chat/completions";
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    };

    const requestData = {
        model: "grok-beta",
        messages: [
            { role: "system", content: systemRoleMessage },
            { role: "user", content: userMessage }
        ],
        max_tokens: 2000,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.choices[0].message.content; // Return bot's response
    } catch (error) {
        console.error("Error fetching bot response:", error);
        return "Sorry, there was an error communicating with the bot."; // Fallback message
    }
};

const handleSendMessage = async () => {
    const userMessage = markdownInput; // From textarea instead of input box
    if (userMessage.trim() === "" || !apiKey) return;

    setMarkdownInput(''); // Clear input after sending

    showLoading();

    const botResponse = await getBotResponseFromChatGPT(userMessage);
    hideLoading();

    // Update history
    setChatHistory(prev => [
        ...prev,
        { role: "user", content: userMessage },
        { role: "assistant", content: botResponse },
    ]);
  };
  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <button className="reset-buttona" id="viewHistory">🕓</button>
          <h2>The Legal Head</h2>
          <button className="settings-button" id="openSettings">⚙️</button>
        </div>

        <div className="chat-messages" id="chatMessages"></div>

        <div className="input-container">
          <input
            type="text"
            className="input-box"
            id="userInput"
            placeholder="Type your Message..."
          />
          <button className="send-button" id="sendMessage">↵</button>
          <button className="reset-button" id="resetChat">✎</button>
        </div>
      </div>

      <div className="modal" id="settingsModal">
        <div className="modal-content">
          <span className="close" id="closeSettings">&times;</span>
          <h3>Settings</h3>
          <label htmlFor="apiKeyInput">API Key:</label>
          <input
            type="text"
            id="apiKeyInput"
            autoComplete="off"
            placeholder="Enter your API Key"
          />
          <h4>Customize System Role:</h4>
          <textarea
            id="systemRoleInput"
            placeholder="Customize system role message"
          ></textarea>
          <button className="send-buttona" id="saveApiKey" style={{ marginTop: '15px' }}>
            Save
          </button>
        </div>
      </div>

      {/* History Modal */}
      <div className="modal" id="historyModal">
        <div className="modal-content">
          <span className="close" id="closeHistory">&times;</span>
          <h3>Chat History</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="historyTable"></tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default Query;