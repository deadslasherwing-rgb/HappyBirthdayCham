import React, { memo } from 'react';
import { PageData, ItemType } from '../types';
import { PhotoWidget } from './PhotoWidget';
import { StickyNote } from './StickyNote';

interface BookPageProps {
    page: PageData;
    isMobile?: boolean;
}

// Using memo to prevent re-renders when the parent 3D container rotates
export const BookPage: React.FC<BookPageProps> = memo(({ page, isMobile }) => {
    
    // Style for the paper pattern
    const getBackgroundClass = () => {
        switch (page.backgroundStyle) {
            case 'lined': return 'bg-[linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:100%_2rem]';
            case 'grid': return 'bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem]';
            default: return '';
        }
    };

    return (
        <div className={`relative w-full h-full overflow-hidden paper-texture ${getBackgroundClass()}`}>
            {/* Page Content */}
            {page.items.map((item) => {
                const { x, y, rotate } = item.position;
                
                // On mobile, we might want to stack them or adjust positions slightly
                // For now, we trust the percentage based layout but limit bounds
                const style: React.CSSProperties = {
                    position: 'absolute',
                    left: `${x}%`,
                    top: `${y}%`,
                    width: item.style?.width || 'auto',
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    zIndex: item.style?.zIndex || 1
                };

                if (item.type === ItemType.PHOTO) {
                    return <div key={item.id} style={style}><PhotoWidget item={item} /></div>;
                }
                
                if (item.type === ItemType.NOTE) {
                    return <div key={item.id} style={style}><StickyNote item={item} /></div>;
                }

                if (item.type === ItemType.TEXT) {
                     return (
                        <div key={item.id} style={style} className="text-center pointer-events-none">
                            <h3 
                                className={`font-script text-3xl md:text-5xl`}
                                style={{ color: item.style?.textColor || '#000' }}
                            >
                                {item.content}
                            </h3>
                        </div>
                     );
                }

                return null;
            })}

            {/* Page Number (Subtle) */}
            <div className="absolute bottom-4 w-full text-center pointer-events-none opacity-40">
                <span className="font-serif-display text-xs text-gray-500">- {page.id + 1} -</span>
            </div>
        </div>
    );
});