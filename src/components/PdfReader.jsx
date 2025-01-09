import React, { useState } from 'react';
import PDFParser from 'pdf2json';

const PdfReader = ({ onTextExtracted }) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            if (selectedFile.type !== 'application/pdf') {
                setError('Please select a valid PDF file.');
                return;
            }
            setError('');
            extractText(selectedFile);
        }
    };

    const extractText = (file) => {
        setLoading(true);
        
        const pdfParser = new PDFParser();

        pdfParser.on("pdfParser_dataError", (errData) => {
            console.error(errData.parserError);
            setLoading(false);
            setError('Could not extract text. Please try a different PDF file.');
        });

        pdfParser.on("pdfParser_dataReady", (pdfData) => {
            const text = pdfParser.getRawTextContent();
            onTextExtracted(text); // Pass the extracted text to the parent component
            setLoading(false);
        });

        pdfParser.loadPDF(file.path); // handle the file path for the PDF
    };

    return (
        <div className="flex flex-col items-center mt-4">
            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="mb-2"
            />
            {error && <p className="text-red-500">{error}</p>}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default PdfReader;
