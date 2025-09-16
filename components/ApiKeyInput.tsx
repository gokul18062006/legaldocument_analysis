import React, { useState } from 'react';
import { Icon } from './Icon';

interface ApiKeyInputProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
}

export const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ apiKey, onApiKeyChange }) => {
  const [localApiKey, setLocalApiKey] = useState(apiKey);
  const [isEditing, setIsEditing] = useState(!apiKey);

  const handleSave = () => {
    onApiKeyChange(localApiKey);
    setIsEditing(false);
  };
  
  // A simple visual mask for the key
  const maskedKey = apiKey ? `********************${apiKey.slice(-4)}` : '';

  React.useEffect(() => {
    if (!apiKey) {
      setIsEditing(true);
    }
    setLocalApiKey(apiKey);
  }, [apiKey]);


  if (!isEditing && apiKey) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200 mb-8 flex justify-between items-center">
        <div className="flex items-center">
          <Icon name="key" className="h-6 w-6 mr-3 text-green-600" />
          <div>
            <p className="font-semibold text-slate-700">API Key Saved</p>
            <p className="text-slate-500 text-sm font-mono">{maskedKey}</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsEditing(true);
            setLocalApiKey(apiKey);
          }}
          className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
        >
          Edit
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 mb-8">
      <h2 className="text-xl font-bold text-slate-700 mb-2 flex items-center">
        <Icon name="key" className="h-6 w-6 mr-2 text-indigo-500" />
        Enter Your Gemini API Key
      </h2>
      <p className="text-slate-500 mb-4">
        Your API key is stored securely in your browser's local storage and is required to use this application.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="password"
          value={localApiKey}
          onChange={(e) => setLocalApiKey(e.target.value)}
          placeholder="Enter your API key here"
          className="flex-grow p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
        />
        <button
          onClick={handleSave}
          disabled={!localApiKey.trim()}
          className="bg-indigo-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition duration-150 ease-in-out"
        >
          Save Key
        </button>
      </div>
    </div>
  );
};
