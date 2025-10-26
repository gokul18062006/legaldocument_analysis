import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <Icon name="logo" className="h-8 w-8 text-indigo-600" />
                        <h1 className="text-2xl font-bold text-slate-800">
                            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                LegalEase AI
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};