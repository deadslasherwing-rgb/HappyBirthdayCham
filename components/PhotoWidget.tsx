import React from 'react';
import { BookItem } from '../types';
import { getDirectImageSrc } from '../utils';

interface PhotoWidgetProps {
    item: BookItem;
}

export const PhotoWidget: React.FC<PhotoWidgetProps> = ({ item }) => {
    // Xử lý link Google Drive hoặc link thường
    const rawSrc = getDirectImageSrc(item.content);
    
    // Xử lý đường dẫn tương đối cho GitHub Pages
    // Nếu link không bắt đầu bằng http (tức là file trong thư mục public), ta thêm BASE_URL vào trước
    let finalSrc = rawSrc;
    if (rawSrc && !rawSrc.startsWith('http')) {
        // Loại bỏ dấu / ở đầu nếu có để tránh trùng lặp
        const cleanPath = rawSrc.startsWith('/') ? rawSrc.slice(1) : rawSrc;
        finalSrc = `${(import.meta as any).env.BASE_URL}${cleanPath}`;
    }

    return (
        <div className="flex flex-col items-center bg-white p-2 pb-8 shadow-md border border-gray-200 transition-transform hover:scale-105 duration-300 ease-out cursor-pointer group">
            <div className="relative overflow-hidden w-full aspect-[4/5] bg-gray-100 mb-2">
                <img 
                    src={finalSrc} 
                    alt="Memory" 
                    className="w-full h-full object-cover filter sepia-[0.15] contrast-[0.95] group-hover:filter-none transition-all duration-500"
                    loading="lazy"
                    onError={(e) => {
                        // Fallback nếu ảnh lỗi
                        (e.target as HTMLImageElement).src = 'https://placehold.co/400x500?text=Image+Error';
                    }}
                />
            </div>
            {item.caption && (
                <p className="font-handwriting text-gray-700 text-center text-sm md:text-base leading-tight w-full px-1">
                    {item.caption}
                </p>
            )}
            
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-[1px] rotate-1 shadow-sm border-l border-r border-white/60"></div>
        </div>
    );
};