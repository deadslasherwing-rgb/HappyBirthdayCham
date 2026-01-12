import React from 'react';
import { BookItem } from '../types';

interface StickyNoteProps {
    item: BookItem;
}

export const StickyNote: React.FC<StickyNoteProps> = ({ item }) => {
    return (
        <div 
            className="p-4 shadow-lg flex items-center justify-center relative transition-transform hover:-translate-y-1 duration-300"
            style={{ backgroundColor: item.style?.bgColor || '#fef3c7' }}
        >
            <p className="font-handwriting text-gray-800 text-sm md:text-lg text-center leading-relaxed">
                {item.content}
            </p>
            {/* Pin or Tape visual */}
            <div className="absolute -top-2 right-1/2 w-3 h-3 rounded-full bg-red-400 shadow-sm border border-red-500"></div>
        </div>
    );
};