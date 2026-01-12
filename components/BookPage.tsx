import React, { useState, memo } from 'react';
import { PageData, ItemType } from '../types';
import { PhotoWidget } from './PhotoWidget';
import { StickyNote } from './StickyNote';
import { Heart, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookPageProps {
    page: PageData;
    isMobile?: boolean;
}

// Using memo to prevent re-renders when the parent 3D container rotates
export const BookPage: React.FC<BookPageProps> = memo(({ page, isMobile }) => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    // Style for the paper pattern
    const getBackgroundClass = () => {
        switch (page.backgroundStyle) {
            case 'lined': return 'bg-[linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:100%_2rem]';
            case 'grid': return 'bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem]';
            default: return '';
        }
    };

    if (page.isFinalPage) {
        return (
            <div className={`relative w-full h-full overflow-hidden p-6 md:p-12 flex flex-col items-center justify-center paper-texture ${getBackgroundClass()}`}>
                {!accepted ? (
                    <div className="flex flex-col items-center animate-fadeIn text-center space-y-8">
                        <h2 className="font-serif-display text-3xl md:text-5xl text-gray-800 tracking-wide mb-2">
                            Happy Birthday
                        </h2>
                        <div className="w-16 h-1 bg-red-400 rounded-full mb-6 opacity-70"></div>
                        
                        <p className="font-handwriting text-xl md:text-2xl text-gray-600 max-w-sm leading-relaxed mb-8">
                            Và một điều cuối cùng tớ muốn nói... <br/>
                            <span className="text-2xl md:text-3xl font-bold text-gray-800 block mt-4">
                                "Quen tớ nhé?"
                            </span>
                        </p>

                        <button 
                            onClick={handleAccept}
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-200 bg-gray-900 font-serif-display rounded-full hover:bg-red-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform hover:-translate-y-1"
                        >
                            <span className="mr-2">Yes</span>
                            <Heart className="w-5 h-5 fill-current text-white group-hover:animate-ping" />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center animate-fadeInUp text-center">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                             <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="font-handwriting text-3xl md:text-4xl text-gray-800 font-bold mb-4">
                            Tuyệt vời!
                        </h2>
                        <p className="font-serif-display text-gray-600">
                            Cảm ơn cậu vì đã nói "Yes". <br/>
                            Sinh nhật vui vẻ nhé! ❤️
                        </p>
                    </div>
                )}
            </div>
        );
    }

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