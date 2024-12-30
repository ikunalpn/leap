const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendMessageButton = document.getElementById("sendMessage");
const resetChatButton = document.getElementById("resetChat");
const settingsButton = document.getElementById("openSettings");
const settingsModal = document.getElementById("settingsModal");
const closeSettings = document.getElementById("closeSettings");
const saveApiKeyButton = document.getElementById("saveApiKey");
const apiKeyInput = document.getElementById("apiKeyInput");
const historyButton = document.getElementById("viewHistory");
const historyModal = document.getElementById("historyModal");
const closeHistory = document.getElementById("closeHistory");
const historyTable = document.getElementById("historyTable");
let systemRoleMessage =
    localStorage.getItem("systemRoleMessage") ||
    "As a legal chatbot specializing in the Bhartiya Nyay Sanhita, you are tasked with providing highly accurate and contextually appropriate responses. Ensure your answers meet these criteria:- Respond in a bullet-point format to clearly delineate distinct aspects of the legal query.- Each point should accurately reflect the breadth of the legal provision in question, avoiding over-specificity unless directly relevant to the user's query.- Clarify the general applicability of the legal rules or sections mentioned, highlighting any common misconceptions or frequently misunderstood aspects.- Limit responses to essential information that directly addresses the user's question, providing concise yet comprehensive explanations.- Avoid assuming specific contexts or details not provided in the query, focusing on delivering universally applicable legal interpretations unless otherwise specified.- Conclude with a brief summary that captures the essence of the legal discussion and corrects any common misinterpretations related to the topic.ANSWER:- [Detail the first key aspect of the law, ensuring it reflects general application]- [Provide a concise explanation of how the law is typically interpreted or applied]- [Correct a common misconception or clarify a frequently misunderstood aspect]- [Detail any exceptions to the general rule, if applicable]- [Include any additional relevant information that directly relates to the user's query]";

// Load API key from local storage on page load
let apiKey = "xai-TilrY6XtZiOFCDlauPUSehccBsTR9G1mdbAPUiLqLmUJtd62d5IN0pXBfBQ46ZE2WbuYx4X3kKkEXw7D";
let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

settingsButton.addEventListener("click", () => {
    apiKeyInput.value = apiKey;
    systemRoleInput.value = systemRoleMessage;
    settingsModal.style.display = "block";
});

closeSettings.addEventListener("click", () => {
    settingsModal.style.display = "none";
});

saveApiKeyButton.addEventListener("click", () => {
    apiKey = apiKeyInput.value.trim();
    localStorage.setItem("apiKey", apiKey);
    systemRoleMessage =
        systemRoleInput.value.trim() ||
        "As a legal chatbot specializing in the Bhartiya Nyay Sanhita, you are tasked with providing highly accurate and contextually appropriate responses. Ensure your answers meet these criteria:- Respond in a bullet-point format to clearly delineate distinct aspects of the legal query.- Each point should accurately reflect the breadth of the legal provision in question, avoiding over-specificity unless directly relevant to the user's query.- Clarify the general applicability of the legal rules or sections mentioned, highlighting any common misconceptions or frequently misunderstood aspects.- Limit responses to essential information that directly addresses the user's question, providing concise yet comprehensive explanations.- Avoid assuming specific contexts or details not provided in the query, focusing on delivering universally applicable legal interpretations unless otherwise specified.- Conclude with a brief summary that captures the essence of the legal discussion and corrects any common misinterpretations related to the topic.ANSWER:- [Detail the first key aspect of the law, ensuring it reflects general application]- [Provide a concise explanation of how the law is typically interpreted or applied]- [Correct a common misconception or clarify a frequently misunderstood aspect]- [Detail any exceptions to the general rule, if applicable]- [Include any additional relevant information that directly relates to the user's query]";
    localStorage.setItem("apiKey", apiKey);
    localStorage.setItem("systemRoleMessage", systemRoleMessage);
    settingsModal.style.display = "none";
});

historyButton.addEventListener("click", () => {
    renderHistory();
    historyModal.style.display = "block";
});

closeHistory.addEventListener("click", () => {
    historyModal.style.display = "none";
});

resetChatButton.addEventListener("click", () => {
    saveConversation();
    chatMessages.innerHTML = "";
    chatHistory.length = 0;
});

sendMessageButton.addEventListener("click", async () => {
    const userMessage = userInput.value;
    if (userMessage.trim() === "" || !apiKey) return;

    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = userMessage;
    chatMessages.appendChild(userMessageDiv);
    userInput.value = "";

    showLoading();

    try {
        const botResponse = await getBotResponseFromChatGPT(userMessage);
        hideLoading();

        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("bot-message");
        const htmlContent = DOMPurify.sanitize(marked.parse(botResponse));
        botMessageDiv.innerHTML = htmlContent;

        botMessageDiv.textContent = botResponse;
        chatMessages.appendChild(botMessageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        chatHistory.push({ role: "assistant", content: botResponse });
    } catch (error) {
        console.error("ChatGPT:", error);
        hideLoading();
    }
});

function showLoading() {
    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("loading");
    loadingDiv.textContent = "Loading...";
    chatMessages.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingDiv = document.querySelector(".loading");
    if (loadingDiv) {
        chatMessages.removeChild(loadingDiv);
    }
}

function saveConversation() {
    if (chatHistory.length > 0) {
        const firstMessage =
            chatHistory.find((msg) => msg.role === "user")?.content ||
            "Conversation";
        const title =
            firstMessage.length > 20
                ? firstMessage.substring(0, 20) + "..."
                : firstMessage;
        const date = new Date().toLocaleString();
        const conversation = { title, date, messages: chatHistory };
        const conversations =
            JSON.parse(localStorage.getItem("chatConversations")) || [];
        conversations.push(conversation);
        localStorage.setItem(
            "chatConversations",
            JSON.stringify(conversations)
        );
    }
}

function renderHistory() {
    historyTable.innerHTML = "";
    const conversations =
        JSON.parse(localStorage.getItem("chatConversations")) || [];
    conversations.forEach((conv, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${conv.title}</td>
                    <td>${conv.date}</td>
                    <td>
                        <button onclick="loadConversation(${index})">Load</button>
                        <button onclick="deleteConversation(${index})">Delete</button>
                        <button onclick="downloadConversation(${index})">Download</button>
                    </td>
                `;
        historyTable.appendChild(row);
    });
}

function loadConversation(index) {
    const conversations = JSON.parse(
        localStorage.getItem("chatConversations")
    );
    chatHistory = conversations[index].messages;
    chatMessages.innerHTML = "";
    chatHistory.forEach((msg) => {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add(
            msg.role === "user" ? "user-message" : "bot-message"
        );
        msgDiv.textContent =
            (msg.role === "user" ? "User: " : "Bot: ") + msg.content;
        chatMessages.appendChild(msgDiv);
    });
    historyModal.style.display = "none";
}

function deleteConversation(index) {
    const conversations = JSON.parse(
        localStorage.getItem("chatConversations")
    );
    conversations.splice(index, 1);
    localStorage.setItem(
        "chatConversations",
        JSON.stringify(conversations)
    );
    renderHistory();
}

function downloadConversation(index) {
    const conversations = JSON.parse(
        localStorage.getItem("chatConversations")
    );
    const conversation = conversations[index];
    const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(conversation));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${conversation.title}.json`);
    downloadAnchor.click();
}

async function getBotResponseFromChatGPT(userMessage) {
    const apiUrl = "https://api.x.ai/v1/chat/completions";
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    };
    const systemMessage = { role: "system", content: systemRoleMessage };
    chatHistory.push(
        { role: "system", content: systemRoleMessage },
        { role: "user", content: userMessage }
    );

    const requestData = {
        model: "grok-beta",
        messages: chatHistory,
        max_tokens: 2000,
    };

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestData),
    });

    const data = await response.json();
    return data.choices[0].message.content;
}