'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc = theme === 'dark' ? '/images/darr.png' : '/images/mitlogo.webp';

  return (
    <div className={`w-[150px] h-[100px] relative ${className}`}>
      <Image
        src={logoSrc}
        alt="mitacademy"
        fill
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 100vw, 150px"
        priority
      />
    </div>
  );
};

export default Logo;
