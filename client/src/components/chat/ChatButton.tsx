import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
      data-testid="button-chat-assistant"
    >
      <div className="relative">
        {/* AI Sparkle Icon */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`text-white transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
        >
          <path 
            d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" 
            fill="currentColor"
          />
          <path 
            d="M19 15L20.09 18.26L23 19L20.09 19.74L19 23L17.91 19.74L15 19L17.91 18.26L19 15Z" 
            fill="currentColor" 
            opacity="0.7"
          />
          <path 
            d="M5 6L5.5 7.5L7 8L5.5 8.5L5 10L4.5 8.5L3 8L4.5 7.5L5 6Z" 
            fill="currentColor" 
            opacity="0.7"
          />
        </svg>
        
        {/* Floating animation dots */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 animate-in fade-in-0 zoom-in-95 duration-300">
          Chat with G AI
          <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </Button>
  );
}