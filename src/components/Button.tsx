'use client'
import Image from 'next/image'

interface ButtonProps {
  onClick?: () => void;
  variant: 'start' | 'pause' | 'reset' | 'stop' | 'play';
  className?: string;
}

export default function Button({ onClick, variant, className = '' }: ButtonProps) {
  const getButtonImage = () => {
    switch (variant) {
      case 'start':
        return '/Start_button.svg';
      case 'pause':
        return '/Pause_button.svg';
      case 'reset':
        return '/reset_button.svg';
      case 'stop':
        return '/stop_button.svg';
      case 'play':
        return '/play_button.svg';
      default:
        return '/Start_button.svg';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`relative w-48 h-24 flex items-center justify-center hover:opacity-90 transition-opacity mx-2 ${className}`}
    >
      <Image
        src={getButtonImage()}
        alt={`${variant} Button`}
        fill
        className="object-contain"
        priority
      />
    </button>
  );
}

