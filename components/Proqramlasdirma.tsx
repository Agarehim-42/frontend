'use client';  // Client-side rendering için

import { useRouter } from 'next/navigation';  // `next/navigation` ile router işlemi
import React from 'react';

export default function Proqramlasdirma() {
  const router = useRouter();

  // Geriye gitmek için onClick fonksiyonu
  const handleGoBack = () => {
    router.back();  // Bir önceki sayfaya dön
  };

  return (
    <div className="p-4">
      {/* Başlık */}
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
        Proqramlaşdırma
      </h1>

      {/* Geri Butonu */}
      <button 
        onClick={handleGoBack}  // Tıklanıldığında handleGoBack çalışacak
        className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 transition-colors duration-300"
      >
        Geri
      </button>

      {/* Alt Başlıklar */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend</h2>
        <p className="text-gray-600 dark:text-gray-400">Veb inkişaf üçün ön yüz proqramlaşdırma.</p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Backend</h2>
        <p className="text-gray-600 dark:text-gray-400">Server tərəfi və verilənlər bazası proqramlaşdırması.</p>
      </div>
    </div>
  );
}
