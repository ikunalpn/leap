import React, {useState} from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_KEY = "AIzaSyCebUHnut7uxYC--dJ79GAAp_j6uzktj4c"
function Query() {  

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false); 

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "As a legal chatbot specializing in the Bhartiya Nyay Sanhita, you are tasked with providing highly accurate and contextually appropriate responses. Ensure your answers meet these criteria:- Respond in a bullet-point format to clearly delineate distinct aspects of the legal query.- Overview of the Relevant Law: Provide a clear and concise explanation of the specific provision or section of the Bhartiya Nyay Sanhita being inquired about. Highlight the general applicability of the rule.Interpretation and Application: Explain how this law is typically interpreted in practice, ensuring that the explanation reflects common legal standards without being over-specific.Common Misconceptions: Identify and correct any prevalent misunderstandings related to the law or its application. This helps clarify what individuals might wrongly assume about the legal provision.Exceptions to the Rule: If relevant, outline any exceptions to the general rule laid out in the provision, indicating scenarios where the law may apply differently.Punishment Details: Clearly specify the punishment associated with the act in question, indicating whether it is bailable or non-bailable. This should include potential penalties and conditions tied to them.Additional Relevant Information: Offer any other important context or details that relate directly to the user's inquiry but are not captured in the previous points.Conclusion: Summarize the essential aspects of the law discussed, correcting any common points of confusion and emphasizing the critical elements of legal interpretation." }]
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
    
        // Add user message to the chat history and clear the input
        setMessages((prev) => [...prev, { role: "user", text: input }]);
        
        // Clear the input field immediately
        setInput("");
        setLoading(true); // Set loading state to true
    
        // Send message to chatbot
        try {
          const response = await chat.sendMessage(input);
          const formattedResponse = formatResponse(response.response.text());
    
          setMessages((prev) => [
            ...prev,
            { role: "model", text: formattedResponse },
          ]);
        } catch (error) {
          console.error("Error sending message:", error);
        } finally {
          setLoading(false); // Reset loading state after processing the response
        }
      };

    // Function to format the response
    const formatResponse = (responseText) => {
        return responseText
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Replace **text** with <strong>text</strong>
            .replace(/\*\s/g, "<li>") // Replace bullet point start with <li>
            .replace(/\n/g, "</li><li>"); // Replace new line with list items
    };
    return (
        <div style={{ backgroundColor: '#111827', minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto p-4" style={{ backgroundColor: '#111827', color: 'white' }}>
        <h1 className="text-2xl font-bold mb-4 text-center">LEAP Chatbot - Bhartiya Nyay Sanhita</h1>
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className={`mb-5 ${msg.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-md ${
                  msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }} // Use dangerouslySetInnerHTML to render HTML
              />
            </li>
          ))}
          {loading && ( // Show loading spinner if loading
            <li className="text-left mb-5">
              <span className="inline-block p-2 rounded-md bg-gray-400 text-black">
                <div className="spinner"></div> {/* Loading spinner */}
              </span>
            </li>
          )}
        </ul>
        <form onSubmit={handleSendMessage} className="mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full m-5 text-black"
            placeholder="Ask a legal question..."
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </form>
      </div>

      {/* CSS for the spinner */}
      <style>{`
        .spinner {
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-left-color: #ffffff; /* White spinner */
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
    )
}

export default Query