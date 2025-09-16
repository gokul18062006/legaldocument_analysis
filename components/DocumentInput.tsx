
import React, { useRef } from 'react';
import { Icon } from './Icon';
import { Loader } from './Loader';
import type { UploadedFile } from '../types';

interface DocumentInputProps {
    documentText: string;
    setDocumentText: (text: string) => void;
    uploadedFile: UploadedFile | null;
    setUploadedFile: (file: UploadedFile | null) => void;
    onAnalyze: () => void;
    isLoading: boolean;
}

export const DocumentInput: React.FC<DocumentInputProps> = ({ documentText, setDocumentText, uploadedFile, setUploadedFile, onAnalyze, isLoading }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        event.target.value = '';

        const validMimeTypes = [
            'text/plain', 
            'application/pdf', 
        ];

        if (!validMimeTypes.includes(file.type)) {
            alert('Unsupported file type. Please upload a .txt or .pdf file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target?.result as string;
            const base64Data = dataUrl.substring(dataUrl.indexOf(',') + 1);
            setUploadedFile({
                name: file.name,
                mimeType: file.type,
                data: base64Data,
            });
            setDocumentText(''); // Clear text area when file is uploaded
        };
        reader.onerror = () => {
            alert('Error reading the file.');
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveFile = () => {
        setUploadedFile(null);
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center">
                <Icon name="file" className="h-6 w-6 mr-2 text-indigo-500" />
                Your Legal Document
            </h2>
            <p className="text-slate-500 mb-4">
                Paste the content of your legal document below, or upload a .txt or .pdf file.
            </p>

            {uploadedFile ? (
                <div className="w-full h-64 p-3 border border-slate-300 rounded-md bg-slate-50 flex flex-col items-center justify-center">
                    <Icon name="document" className="h-12 w-12 text-slate-400" />
                    <p className="font-semibold mt-2 text-slate-700">{uploadedFile.name}</p>
                    <button 
                        onClick={handleRemoveFile} 
                        className="mt-4 flex items-center text-sm text-red-600 hover:text-red-800 font-semibold"
                        disabled={isLoading}
                    >
                        <Icon name="remove" className="h-4 w-4 mr-1" />
                        Remove file
                    </button>
                </div>
            ) : (
                <textarea
                    value={documentText}
                    onChange={(e) => setDocumentText(e.target.value)}
                    placeholder="e.g., This agreement is made and entered into on this day..."
                    className="w-full h-64 p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out resize-y"
                    disabled={isLoading}
                />
            )}
            
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".txt,.pdf,text/plain,application/pdf"
            />
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
                 <button
                    onClick={handleUploadClick}
                    disabled={isLoading}
                    className="w-full sm:w-auto flex items-center justify-center bg-white text-slate-700 font-semibold py-3 px-4 rounded-md border border-slate-300 hover:bg-slate-50 disabled:bg-slate-100 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                >
                    <Icon name="upload" className="h-5 w-5 mr-2" />
                    Upload Document
                </button>
                <button
                    onClick={onAnalyze}
                    disabled={isLoading || (!documentText.trim() && !uploadedFile)}
                    className="w-full sm:flex-1 flex items-center justify-center bg-indigo-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                >
                    {isLoading ? (
                        <>
                            <Loader />
                            Analyzing...
                        </>
                    ) : (
                        <>
                        <Icon name="sparkles" className="h-5 w-5 mr-2" />
                            Analyze Document
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};