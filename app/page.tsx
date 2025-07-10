'use client';
import { useEffect, useState } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [showExtraLove, setShowExtraLove] = useState(false);
  const [clickedButtons, setClickedButtons] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Show main message after a short delay
    const timer = setTimeout(() => setShowMessage(true), 1000);
    
    // Generate floating hearts
    const heartElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setHearts(heartElements);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (buttonId: number) => {
    setClickedButtons(prev => new Set([...prev, buttonId]));
    setShowExtraLove(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 overflow-hidden relative">
      
      {/* Animated Background Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-bounce"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: '3s'
            }}
          >
            <Heart 
              className="text-pink-300 opacity-30" 
              size={Math.random() * 20 + 10}
              style={{
                animationDelay: `${heart.delay}s`
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: '2s'
            }}
          >
            <Sparkles className="text-yellow-400 opacity-40" size={16} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Big Rose Bouquet Animation */}
        <div className="mb-8 animate-bounce">
          <div className="text-9xl mb-4 animate-pulse">💐</div>
          <div className="flex justify-center space-x-4">
            <span className="text-7xl animate-bounce" style={{ animationDelay: '0.1s' }}>🌺</span>
            <span className="text-7xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌸</span>
            <span className="text-7xl animate-bounce" style={{ animationDelay: '0.3s' }}>🌻</span>
          </div>
        </div>

        {/* Main Love Message */}
        <div className={`text-center transform transition-all duration-2000 ${showMessage ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-pulse">
            I Love You
          </h1>
          <h2 className="text-4xl md:text-6xl font-semibold text-rose-600 mb-8 animate-bounce">
            Angeleee ❤️
          </h2>
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[1, 2, 3].map((buttonId) => (
            <Button
              key={buttonId}
              onClick={() => handleButtonClick(buttonId)}
              className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
              style={{ animationDelay: `${buttonId * 0.5}s` }}
            >
              Click Me! 💕
            </Button>
          ))}
        </div>

        {/* Extra Love Content - Revealed after button clicks */}
        {showExtraLove && (
          <div className="text-center animate-fade-in mb-8">
            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 animate-heartbeat">
                I Love You More and More! 💖
              </h3>
              <div className="text-6xl mb-4 animate-bounce">
                🎉 💕 🎊 💝 🌈
              </div>
            </div>

            {/* Giant Bouquet Animation */}
            <div className="mb-6 animate-float">
              <div className="text-8xl mb-2">🌹💐🌹</div>
              <div className="text-6xl mb-2">🌺🌸🌻🌷🌼</div>
              <div className="text-5xl">🥀🌹🌺🌸🌻</div>
            </div>

            {/* Romantic Messages */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-2xl text-rose-600 font-semibold animate-fade-in">
                Every day with you is like a beautiful dream! ✨
              </p>
              <p className="text-xl text-pink-600 italic animate-fade-in" style={{ animationDelay: '0.5s' }}>
                You're my sunshine, my moonlight, and all my stars! 🌟🌙⭐
              </p>
              <p className="text-lg text-purple-600 animate-fade-in" style={{ animationDelay: '1s' }}>
                Forever and always, you'll be my one true love! 💕
              </p>
            </div>
          </div>
        )}

        {/* Cute Elements Row */}
        <div className="flex justify-center items-center space-x-8 mb-8 animate-fade-in">
          <div className="animate-spin" style={{ animationDuration: '3s' }}>
            <Gift className="text-pink-500" size={40} />
          </div>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>💕</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🎀</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌺</span>
          <div className="animate-spin" style={{ animationDuration: '4s' }}>
            <Heart className="text-red-500 fill-current" size={40} />
          </div>
        </div>

        {/* Cute Message */}
        <div className="text-center max-w-2xl animate-fade-in">
          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            You make my world brighter every single day! 🌟
          </p>
          <p className="text-lg md:text-xl text-gray-600 italic">
            "In a garden full of flowers, you're the most beautiful bouquet" 💐✨
          </p>
        </div>

        {/* Bottom Flower Garden */}
        <div className="mt-12 flex justify-center space-x-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <span 
              key={i}
              className="text-3xl animate-bounce"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            >
              {['🌹', '🌺', '🌸', '🌻', '🌷'][i % 5]}
            </span>
          ))}
        </div>

        {/* Floating Love Notes */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-pink-100 p-3 rounded-lg shadow-lg border-2 border-pink-200 transform rotate-12">
            <p className="text-pink-600 font-semibold">You're amazing! 💖</p>
          </div>
        </div>

        <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-rose-100 p-3 rounded-lg shadow-lg border-2 border-rose-200 transform -rotate-12">
            <p className="text-rose-600 font-semibold">Forever yours! 🥰</p>
          </div>
        </div>

        <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-red-100 p-3 rounded-lg shadow-lg border-2 border-red-200 transform rotate-6">
            <p className="text-red-600 font-semibold">My heart is yours! 💕</p>
          </div>
        </div>

      </div>

      {/* CSS Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--rotate, 0deg)); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;