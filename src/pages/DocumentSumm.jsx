import React, { useState } from 'react';
import PdfReader from '../components/PdfReader';
import { summarizeText } from '../utils/summarizer'

function DocumentSumm() {
    const[summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTextExtracted = async (text) => {
        setLoading(true);
        try {
            const summaryText = await summarizeText(text); // Call your summary function
            setSummary(summaryText);
        } catch (error) {
            console.error("Error summarizing text:", error);
            setSummary("An error occurred while summarizing.");
        }
        setLoading(false);
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center">PDF Document Summarizer</h1>
            <PdfReader onTextExtracted={handleTextExtracted} />
            {loading && <p className="text-center">Summarizing...</p>}
            {summary && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Summary</h2>
                    <p className="border p-4 border-gray-300 rounded-lg">{summary}</p>
                </div>
            )}
        </div>
    );
}

export default DocumentSumm;