import React, { useState, useEffect, useMemo } from 'react';
import { BOOK_PAGES } from './constants';
import { BookPage } from './components/BookPage';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // State to toggle between welcome screen and book
  const [hasStarted, setHasStarted] = useState(false);

  // For Desktop: currentSheetIndex determines how many "sheets" have been flipped to the left.
  const [flippedIndex, setFlippedIndex] = useState(0);

  // For Mobile: simple index (0, 1, 2...)
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sheets = useMemo(() => {
    const sheetData = [];
    // Start from index 1 because index 0 is the static base
    for (let i = 1; i < BOOK_PAGES.length; i += 2) {
      sheetData.push({
        id: `sheet-${i}`,
        front: BOOK_PAGES[i],
        back: BOOK_PAGES[i + 1] || { ...BOOK_PAGES[i], items: [], backgroundStyle: 'plain' } // Empty back if odd count
      });
    }
    return sheetData;
  }, []);

  const totalSheets = sheets.length;
  
  // LOGIC FIX: Xác định chỉ số lật tối đa.
  // Nếu tổng số trang là chẵn (ví dụ 0..21 là 22 trang), thì trang cuối cùng (21) nằm ở MẶT PHẢI của tờ giấy cuối cùng.
  // Nếu ta lật tờ này, sẽ ra mặt sau rỗng và "The End". 
  // Để dừng lại ở trang 21 (người dùng coi là trang cuối), ta không cho phép lật tờ cuối cùng này.
  // Công thức: Nếu số trang chẵn -> maxIndex = totalSheets - 1. Nếu lẻ -> maxIndex = totalSheets.
  const maxFlippedIndex = useMemo(() => {
     return BOOK_PAGES.length % 2 === 0 ? totalSheets - 1 : totalSheets;
  }, [totalSheets]);

  // --- Navigation Handlers ---

  const goNext = () => {
    if (isMobile) {
      if (mobileIndex < BOOK_PAGES.length - 1) setMobileIndex(p => p + 1);
    } else {
      if (flippedIndex < maxFlippedIndex) setFlippedIndex(p => p + 1);
    }
  };

  const goPrev = () => {
    if (isMobile) {
      if (mobileIndex > 0) setMobileIndex(p => p - 1);
    } else {
      if (flippedIndex > 0) setFlippedIndex(p => p - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!hasStarted) return; // Disable keyboard nav on welcome screen

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flippedIndex, mobileIndex, isMobile, hasStarted, maxFlippedIndex]);


  if (!hasStarted) {
      return <WelcomeScreen onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className={`min-h-screen bg-stone-200 flex flex-col items-center justify-center p-4 md:p-8 font-sans overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} animate-fadeIn`}>
      
      {/* Background Decor */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#a8a29e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* --- MOBILE VIEW (Simple Slider) --- */}
      {isMobile ? (
        <div className="relative w-full max-w-md aspect-[9/14]">
           <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border border-stone-300 relative">
              <BookPage page={BOOK_PAGES[mobileIndex]} isMobile={true} />
              
              {/* Mobile Controls Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              
              {mobileIndex > 0 && (
                <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-lg text-stone-700 z-50">
                  <ChevronLeft size={24} />
                </button>
              )}
              {mobileIndex < BOOK_PAGES.length - 1 && (
                <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-lg text-stone-700 z-50">
                  <ChevronRight size={24} />
                </button>
              )}
           </div>
        </div>
      ) : (
        /* --- DESKTOP VIEW (3D Book) --- */
        <div className="perspective-1500 relative z-10 w-full max-w-6xl aspect-[3/2]">
          <div className="relative w-full h-full preserve-3d">
            
            {/* 1. Static Left Base Page (Page 0) */}
            <div className="absolute left-0 top-0 w-1/2 h-full z-0 bg-white rounded-l-md border-y border-l border-stone-300 shadow-xl overflow-hidden">
               <div className="absolute right-0 top-0 bottom-0 w-8 z-20 spine-gradient pointer-events-none"></div>
               <BookPage page={BOOK_PAGES[0]} />
            </div>

            {/* 2. Static Right Base (Empty/End) */}
            <div className="absolute right-0 top-0 w-1/2 h-full z-0 bg-stone-100 rounded-r-md border-y border-r border-stone-300 shadow-xl overflow-hidden flex items-center justify-center">
               <div className="text-stone-300 font-serif-display italic">The End</div>
            </div>

            {/* 3. Dynamic Sheets */}
            {sheets.map((sheet, index) => {
              const isFlipped = flippedIndex > index;
              
              const baseZIndex = isFlipped ? index + 1 : (totalSheets - index) + 1;
              
              // Optimized transition:
              const transitionStyle = isFlipped 
                ? 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000), z-index 0s 0.6s' 
                : 'transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000), z-index 0s';     

              return (
                <div 
                  key={sheet.id}
                  className={`absolute right-0 top-0 w-1/2 h-full preserve-3d origin-left cursor-pointer`}
                  style={{ 
                    zIndex: baseZIndex,
                    transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                    transition: transitionStyle,
                    willChange: 'transform' // Important: Hint to browser to use GPU
                  }}
                  onClick={() => {
                    if (isFlipped) {
                      if (flippedIndex === index + 1) goPrev();
                    } else {
                      if (flippedIndex === index && flippedIndex < maxFlippedIndex) goNext();
                    }
                  }}
                >
                  {/* FRONT FACE (Right Side Page) */}
                  <div className="page-face face-front rounded-r-md border-y border-r border-stone-300">
                    <div className="absolute left-0 top-0 bottom-0 w-6 z-20 spine-gradient pointer-events-none rotate-180"></div>
                    <BookPage page={sheet.front} />
                  </div>

                  {/* BACK FACE (Left Side Page) */}
                  <div className="page-face face-back rounded-l-md border-y border-l border-stone-300">
                    <div className="absolute right-0 top-0 bottom-0 w-6 z-20 spine-gradient pointer-events-none"></div>
                    <BookPage page={sheet.back} />
                  </div>
                </div>
              );
            })}

          </div>

          {/* Desktop Controls (Outside the book) */}
          <div className="absolute top-1/2 -left-16 -translate-y-1/2">
            <button 
              onClick={goPrev} 
              disabled={flippedIndex === 0}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-stone-700 hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-16 -translate-y-1/2">
            <button 
              onClick={goNext} 
              disabled={flippedIndex === maxFlippedIndex}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-stone-700 hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          
        </div>
      )}

      {/* Progress Indicator */}
      <div className="mt-8 flex gap-2">
        {Array.from({ length: isMobile ? BOOK_PAGES.length : maxFlippedIndex + 1 }).map((_, idx) => (
           <div 
             key={idx}
             className={`h-2 rounded-full transition-all duration-300 ${
               (isMobile ? mobileIndex === idx : flippedIndex === idx) 
               ? 'w-8 bg-stone-600' 
               : 'w-2 bg-stone-300'
             }`}
           />
        ))}
      </div>
      
    </div>
  );
};

export default App;