import React from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
    onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
    // Generate some random balloons
    const balloons = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 6,
        color: ['#fca5a5', '#93c5fd', '#86efac', '#fde047', '#d8b4fe'][Math.floor(Math.random() * 5)]
    }));

    return (
        <div 
            onClick={onStart}
            className="fixed inset-0 z-50 bg-[#fdfbf7] flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        >
            {/* Background Balloons */}
            {balloons.map((b) => (
                <div 
                    key={b.id}
                    className="absolute text-4xl md:text-6xl opacity-70 animate-float pointer-events-none"
                    style={{
                        left: `${b.left}%`,
                        animationDelay: `${b.delay}s`,
                        animationDuration: `${b.duration}s`,
                        bottom: '-10%'
                    }}
                >
                    <span style={{ filter: `drop-shadow(0 4px 6px ${b.color})` }}>🎈</span>
                </div>
            ))}

            <div className="relative z-10 flex flex-col items-center p-6 text-center animate-fadeInUp">
                
                <h1 className="font-script text-5xl md:text-7xl text-gray-800 mb-6 drop-shadow-sm">
                    Chúc mừng <br/> Sinh nhật cậu!
                </h1>
                
                {/* Cat GIF Container */}
                <div className="w-64 h-64 md:w-80 md:h-80 relative mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white flex items-center justify-center group transition-transform duration-500 hover:scale-105">
                    <img 
                        src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" 
                        alt="Cute Cat" 
                        className="w-full h-full object-cover transform scale-125"
                    />
                    
                    {/* Overlay hint */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Sparkles className="text-white w-12 h-12 animate-spin-slow" />
                    </div>
                </div>

                <div className="space-y-2 animate-pulse">
                    <p className="font-handwriting text-xl md:text-2xl text-gray-600">
                        Chạm vào bất kỳ đâu để mở quà
                    </p>
                    <div className="mx-auto w-12 h-1 bg-stone-300 rounded-full"></div>
                </div>

            </div>
        </div>
    );
};