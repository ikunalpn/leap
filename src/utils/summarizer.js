// src/utils/summarizer.js
import axios from 'axios';

// Replace with your Hugging Face API token
const API_TOKEN = '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'; // Get this from your Hugging Face account
const API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';

// Function to summarize text
export const summarizeText = async (text) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                inputs: text,
            },
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            }
        );
        // Extract the summarized text
        return response.data[0].summary_text;
    } catch (error) {
        console.error("Error summarizing text:", error);
        return "Summary could not be generated.";
    }
};
