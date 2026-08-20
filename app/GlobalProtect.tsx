'use client';
import { useEffect } from 'react';

export default function GlobalProtect() {
  useEffect(() => {
    // 禁止右键
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    // 禁止复制、剪切、粘贴
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());
  }, []);

  return null;
}