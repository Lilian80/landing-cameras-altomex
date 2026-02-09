// components/WhatsAppButton.tsx
'use client';

import { trackWhatsAppClick } from '@/lib/analytics';
import type { WhatsAppSource } from '@/lib/analytics';

interface WhatsAppButtonProps {
  source: WhatsAppSource;
  modelName?: string;
  message: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function WhatsAppButton({
  source,
  modelName,
  message,
  className = '',
  children,
  variant = 'primary'
}: WhatsAppButtonProps) {
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999';
  
  const handleClick = () => {
    trackWhatsAppClick(source, modelName);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={`Falar no WhatsApp sobre ${modelName || 'nossos produtos'}`}
    >
      {children}
    </button>
  );
}